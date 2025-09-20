const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  interviewId: {
    type: String,
    required: true,
    index: true
  },
  candidateName: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true,
    enum: ['focus_loss', 'absence', 'unauthorized_item', 'multiple_faces', 'proctoring_start', 'proctoring_end']
  },
  eventDescription: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  }
}, {
  timestamps: true
});

// Index for faster queries
eventSchema.index({ interviewId: 1, timestamp: 1 });

module.exports = mongoose.model('Event', eventSchema);