const fs = require('fs');
const path = require('path');
const os = require('os');

// Reading a file synchronously
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File content (sync):', data);
}
catch (err) {
    console.error('Error reading file (sync):', err);
}
// Writing to a file synchronously
const content = 'This is some example content (sync).'; 
try {
    fs.writeFileSync('example.txt', content);
    console.log('File written successfully (sync)');
}   
catch (err) {
    console.error('Error writing file (sync):', err);
}

// Appending to a file synchronously
const moreContent = '\nThis is some appended content (sync).';
try {
    fs.appendFileSync('output.txt', moreContent);
    console.log('Content appended successfully (sync)');
}
catch (err) {
    console.error('Error appending file (sync):', err);
}
// Deleting a file synchronously
try {
    fs.unlinkSync('output.txt');
    console.log('File deleted successfully (sync)');
}
catch (err) {
    console.error('Error deleting file (sync):', err);
}

// Creating a directory synchronously
try {
    fs.mkdirSync('newDir');
    console.log('Directory created successfully (sync)');
}   
catch (err) {
    console.error('Error creating directory (sync):', err);
}

// Removing a directory synchronously
try {
    fs.rmdirSync('newDir');
    console.log('Directory removed successfully (sync)');
}   
catch (err) {
    console.error('Error removing directory (sync):', err);
}


