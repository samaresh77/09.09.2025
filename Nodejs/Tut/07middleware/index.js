const express = require('express');
const app = express();
const port = 3000;

// Middleware function to log request details
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Call next() to pass control to the next middleware or route handler
};
// Middleware function to check for an API key in headers
const apiKeyChecker = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'mysecretkey') {
        next(); // Valid API key, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }   
};
// Use the middleware functions
app.use(requestLogger);
app.use(apiKeyChecker);
app.use(express.json());

// Sample route
app.get('/data', (req, res) => {
    res.json({ message: 'Here is your data' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});