const express = require('express');
const app = express();
const port = 3000;

// Define routes for different HTTP methods
//Get : To retrieve data from the server.
app.get('/', (req, res) => {
  res.send('<h1>This is a GET request</h1>');
});
//Post : To send data to the server to create a new resource.
app.post('/', (req, res) => {
  res.send('<h1>This is a POST request</h1>');
});
//Put : To update an existing resource on the server or create it if it doesn't exist.
app.put('/', (req, res) => {
  res.send('<h1>This is a PUT request</h1>');
});
//Delete : To remove a resource from the server.
app.delete('/', (req, res) => {
  res.send('<h1>This is a DELETE request</h1>');
});
//Patch : To apply partial modifications to a resource on the server.
app.patch('/', (req, res) => {
  res.send('<h1>This is a PATCH request</h1>');
}); 
//All : To handle all HTTP methods for a specific route.
app.all('/all', (req, res) => {
  res.send('<h1>This handles all HTTP methods</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});