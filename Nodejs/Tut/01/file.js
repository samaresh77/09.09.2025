const fs = require('fs');

// Synchronous file write
fs.writeFileSync("./test.txt", "This is a test file.");

//Asynchronous file write
fs.writeFile("./test2.txt", "This is another test file.", (err) => {
    if (err) throw err;
    // console.log("File created");
});

// Synchronous file read
const data = fs.readFileSync("./test.txt", "utf8"); //return the result
// console.log(data);

// Asynchronous file read
fs.readFile("./test2.txt", "utf8", (err, data) => { //callback function, didn't return the result
    if (err) throw err;
    // console.log(data);
});

// Synchronous file append
fs.appendFileSync("./test.txt", "\nAppended content.");
// console.log("Content appended");

// Asynchronous file append
fs.appendFile("./test2.txt", "\nAppended content.", (err) => {
    if (err) throw err;
    // console.log("Content appended");
});

// Synchronous file delete
// fs.unlinkSync("./test.txt");
// console.log("File deleted");

// Asynchronous file delete
fs.unlink("./test2.txt", (err) => {
    if (err) throw err;
    // console.log("File deleted");
});

// details of file
const stats = fs.statSync("./test.txt");
// console.log(stats.isFile()); // true
// console.log(stats.isDirectory()); // false
// console.log(stats.size); // file size in bytes
// console.log(stats.mtime); // last modified time
// console.log(stats.ctime); // creation time
// console.log(stats.atime); // last access time
// console.log(stats.birthtime); // birth time
 console.log(stats); // complete details

// Synchronous directory create
fs.mkdirSync("./testDir/a/b/c", { recursive: true });
// console.log("Directory created");