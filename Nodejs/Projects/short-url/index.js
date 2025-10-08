const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env file
const shortid = require('shortid'); // For generating short unique IDs

// Import the URL model
const Url = require('./models/url');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable express to parse JSON in the request body
app.use(express.static('public')); // Serve static files from the 'public' directory

// --- Database Connection ---
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch((err) => console.error('MongoDB connection error:', err));

// --- API Routes ---

// 1. Shorten URL Endpoint
app.post('/api/shorten', async (req, res) => {
    const { longUrl } = req.body; // Get the long URL from the request body
    const baseUrl = process.env.BASE_URL;

    // Basic validation for the longUrl
    if (!longUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Check if the long URL already exists in the database
        let url = await Url.findOne({ originalUrl: longUrl });

        if (url) {
            // If it exists, return the existing short URL
            res.json(url);
        } else {
            // If it doesn't exist, create a new short URL
            const urlCode = shortid.generate();
            const shortUrl = `${baseUrl}/${urlCode}`;

            // Create a new URL document and save it to the database
            url = new Url({
                originalUrl: longUrl,
                shortUrl,
                urlCode,
                date: new Date(),
            });

            await url.save();
            res.json(url);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// 2. Redirect Endpoint
app.get('/:urlCode', async (req, res) => {
    try {
        // Find the URL document with the given urlCode
        const url = await Url.findOne({ urlCode: req.params.urlCode });

        if (url) {
            // If found, increment the click count and redirect
            url.clicks++;
            await url.save();
            return res.redirect(url.originalUrl);
        } else {
            // If not found, send a 404 response
            return res.status(404).json({ error: 'No URL found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});