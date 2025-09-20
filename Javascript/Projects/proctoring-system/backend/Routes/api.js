const express = require('express');
const Event = require('../Models/Event');
const router = express.Router();

// Start interview session
router.post('/start-interview', async (req, res) => {
  try {
    const { candidateName, interviewId, startTime } = req.body;
    
    // Create start event
    const event = new Event({
      interviewId,
      candidateName,
      eventType: 'proctoring_start',
      eventDescription: 'Proctoring session started',
      timestamp: new Date(startTime),
      severity: 'low'
    });
    
    await event.save();
    
    res.status(200).json({ message: 'Interview session started', interviewId });
  } catch (error) {
    console.error('Error starting interview:', error);
    res.status(500).json({ error: 'Failed to start interview session' });
  }
});

// Stop interview session
router.post('/stop-interview', async (req, res) => {
  try {
    const { interviewId, endTime } = req.body;
    
    // Get candidate name from last event
    const lastEvent = await Event.findOne({ interviewId }).sort({ timestamp: -1 });
    const candidateName = lastEvent ? lastEvent.candidateName : 'Unknown Candidate';
    
    // Create end event
    const event = new Event({
      interviewId,
      candidateName,
      eventType: 'proctoring_end',
      eventDescription: 'Proctoring session ended',
      timestamp: new Date(endTime),
      severity: 'low'
    });
    
    await event.save();
    
    res.status(200).json({ message: 'Interview session stopped', interviewId });
  } catch (error) {
    console.error('Error stopping interview:', error);
    res.status(500).json({ error: 'Failed to stop interview session' });
  }
});

// Log detection event
router.post('/event', async (req, res) => {
  try {
    const { interviewId, eventType, eventDescription, timestamp } = req.body;
    
    // Get candidate name from last event
    const lastEvent = await Event.findOne({ interviewId }).sort({ timestamp: -1 });
    const candidateName = lastEvent ? lastEvent.candidateName : 'Unknown Candidate';
    
    // Determine severity based on event type
    let severity = 'medium';
    if (eventType === 'focus_loss') severity = 'low';
    if (eventType === 'unauthorized_item' || eventType === 'multiple_faces') severity = 'high';
    
    const event = new Event({
      interviewId,
      candidateName,
      eventType,
      eventDescription,
      timestamp: new Date(timestamp),
      severity
    });
    
    await event.save();
    
    res.status(200).json({ message: 'Event logged successfully' });
  } catch (error) {
    console.error('Error logging event:', error);
    res.status(500).json({ error: 'Failed to log event' });
  }
});

// Get report for interview
router.get('/report/:interviewId', async (req, res) => {
  try {
    const { interviewId } = req.params;
    
    // Get all events for this interview
    const events = await Event.find({ interviewId }).sort({ timestamp: 1 });
    
    if (events.length === 0) {
      return res.status(404).json({ error: 'Interview not found' });
    }
    
    // Calculate statistics
    const focusLossEvents = events.filter(e => e.eventType === 'focus_loss').length;
    const absenceEvents = events.filter(e => e.eventType === 'absence').length;
    const itemEvents = events.filter(e => e.eventType === 'unauthorized_item').length;
    const multipleFacesEvents = events.filter(e => e.eventType === 'multiple_faces').length;
    
    // Calculate duration
    const startEvent = events.find(e => e.eventType === 'proctoring_start');
    const endEvent = events.find(e => e.eventType === 'proctoring_end');
    
    let duration = 0;
    if (startEvent && endEvent) {
      duration = endEvent.timestamp - startEvent.timestamp;
    } else if (startEvent) {
      duration = Date.now() - startEvent.timestamp;
    }
    
    // Format duration
    const formatDuration = (ms) => {
      const seconds = Math.floor(ms / 1000);
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    // Calculate integrity score
    let deductions = (focusLossEvents * 2) + (absenceEvents * 5) + 
                    (itemEvents * 10) + (multipleFacesEvents * 15);
    let integrityScore = Math.max(0, 100 - deductions);
    
    // Generate report
    const report = {
      candidateName: events[0].candidateName,
      interviewId,
      duration: formatDuration(duration),
      focusLossEvents,
      absenceEvents,
      itemEvents,
      multipleFacesEvents,
      integrityScore,
      events: events.map(e => ({
        type: e.eventType,
        description: e.eventDescription,
        timestamp: e.timestamp,
        severity: e.severity
      }))
    };
    
    res.status(200).json(report);
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

// Get all interviews (for admin view)
router.get('/interviews', async (req, res) => {
  try {
    const interviews = await Event.aggregate([
      {
        $match: {
          eventType: 'proctoring_start'
        }
      },
      {
        $lookup: {
          from: 'events',
          let: { interviewId: '$interviewId' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$interviewId', '$$interviewId'] },
                    { $eq: ['$eventType', 'proctoring_end'] }
                  ]
                }
              }
            }
          ],
          as: 'endEvent'
        }
      },
      {
        $project: {
          interviewId: 1,
          candidateName: 1,
          startTime: '$timestamp',
          endTime: { $arrayElemAt: ['$endEvent.timestamp', 0] },
          status: {
            $cond: {
              if: { $gt: [{ $size: '$endEvent' }, 0] },
              then: 'completed',
              else: 'in progress'
            }
          }
        }
      },
      {
        $sort: { startTime: -1 }
      }
    ]);
    
    res.status(200).json(interviews);
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ error: 'Failed to fetch interviews' });
  }
});

module.exports = router;