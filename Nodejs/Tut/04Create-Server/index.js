const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log("New Req received from the browser");
    // res.end('Hello from server side');
    // console.log(req.headers);

    const log = `New Req at ${Date.now()} with URL: ${req.url} and method: ${req.method}\n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        if (err) {
            console.log(err);
        }
        switch (req.url) {
            case '/':
                res.end('This is home page');
                break;
            case '/about':
                res.end('This is about page');
                break;
            default:
                res.end('<h1>404 Page Not Found</h1>');
                break;
        }

    });
    
})

myServer.listen(8000, () => {
    console.log("Server is listening on port 8000");
})