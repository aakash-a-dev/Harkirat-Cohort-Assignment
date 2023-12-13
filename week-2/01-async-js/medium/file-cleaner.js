const fs = require('fs');



fs.readFile("a.txt", 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const cleanedContent = data.replace(/\s+/g, ' ').trim();
    fs.writeFile(inputFile, cleanedContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File cleaned successfully.');
        }
    });
})