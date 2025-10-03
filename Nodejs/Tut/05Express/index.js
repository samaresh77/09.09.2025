const express = require('express');
const app = express();
const port = 3000;

// Define basic routes
app.get('/', (req, res) => {
  res.send(`<h1>This is Home Page</h1>`);
});
app.get('/about', (req, res) => {
  res.send(`<h1>This is About Page</h1>`);
});
app.get('/contact', (req, res) => {
  res.send(`<h1>This is Contact Page</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});