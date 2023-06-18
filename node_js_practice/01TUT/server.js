

const os = require('os');
const path = require('path');

const { add, substract, multiply, divide } = require('./math');
console.log(add(5, 4));
console.log(substract(5, 4));
console.log(multiply(5, 4));
console.log(divide(5, 4));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log("dirname : ", path.dirname(__filename));
// console.log("basename : ", path.basename(__filename));
// console.log("extname : ", path.extname(__filename));

// console.log("parse : ", path.parse(__filename));

//console.log(global);