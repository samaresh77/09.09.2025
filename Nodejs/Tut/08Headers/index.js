const express = require('express');
const app = express();
const port = 3000;

//headers: http headers are key-value pairs sent by the server to the client
// to provide information about the response. They can include details about the
// content type, caching, authentication, and more.

app.get('/', (req, res) => {
  // Setting custom headers
  res.set('Custom-Header', 'CustomHeaderValue');
  res.set('Another-Header', 'AnotherHeaderValue');
    res.send('Hello World with Headers!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});