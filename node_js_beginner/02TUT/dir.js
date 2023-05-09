const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log("Directory created");
    });
} else {
    console.log('Directory exists..');
}


if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log("Directory removed");
    });
} else {
    console.log('Directory doest not exist..');
}