const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// Writing to a file
const content = 'This is some example content.';
fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});

// Appending to a file
const moreContent = '\nThis is some appended content.'; 
fs.appendFile('output.txt', moreContent, (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    }
    console.log('Content appended successfully');
});

// Deleting a file
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});

// Creating a directory
fs.mkdir('newDir', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});

// Removing a directory
fs.rmdir('newDir', (err) => {
    if (err) {
        console.error('Error removing directory:', err);
        return;
    }
    console.log('Directory removed successfully');
});

// Checking if a file or directory exists
fs.access('example.txt', fs.constants.F_OK, (err) => {
    console.log(`${err ? 'File does not exist' : 'File exists'}`);
});
fs.access('newDir', fs.constants.F_OK, (err) => {
    console.log(`${err ? 'Directory does not exist' : 'Directory exists'}`);
});

// Renaming a file
fs.rename('example.txt', 'renamedExample.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});
