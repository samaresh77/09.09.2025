const express = require('express');
const app = express();
const port = 3000;
// Status Codes: HTTP status codes are standardized codes that indicate the outcome of an HTTP request.
// They provide information about whether a request was successful, encountered an error, or requires further action.
// Common status codes include 200 (OK), 404 (Not Found), 500 (Internal Server Error), and many others. 

app.get('/', (req, res) => {
  // Setting status code to 200 (OK)
  res.status(200).send('Hello World with Status Code 200!');
});

app.get('/notfound', (req, res) => {
  // Setting status code to 404 (Not Found)
  res.status(404).send('Resource Not Found - Status Code 404');
});

app.get('/error', (req, res) => {
  // Setting status code to 500 (Internal Server Error)
  res.status(500).send('Internal Server Error - Status Code 500');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// These are recently edited files. Do not suggest code that has been deleted.
// File: Nodejs/Tut/09StatusCode/Notes.txt
// --- a/file:///d%3A/09.09.2025/All/Nodejs/Tut/09StatusCode/Notes.txt
// +++ b/file:///d%3A/09.09.2025/All/Nodejs/Tut/09StatusCode/Notes.txt
// @@ -1,1 +1,3 @@
// +Status Codes: Http status codes are important part of api req and res as they represent the status of the
// +api req and res.
// +They indicate whether a specific HTTP req has been successfully completed.
// -/ --- IGNORE ---
