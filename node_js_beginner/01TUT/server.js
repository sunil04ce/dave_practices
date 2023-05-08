
const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log("dirname : ", path.dirname(__filename));
console.log("basename : ", path.basename(__filename));
console.log("extname : ", path.extname(__filename));

console.log("parse : ", path.parse(__filename));
//console.log('Hello world!');
//console.log(global);