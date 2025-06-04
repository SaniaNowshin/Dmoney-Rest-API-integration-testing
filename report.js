const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/24475549-e8a1c554-d69f-431c-a3f4-8b7730c21414?access_key=${process.env.key}`,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
