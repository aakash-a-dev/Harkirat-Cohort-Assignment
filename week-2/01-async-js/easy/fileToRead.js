const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data ) {
    console.log(data);
})
// It's not working on Local Machine but working on Repl.IT
