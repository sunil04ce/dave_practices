const myNumber = 42;
console.log(myNumber);

const myFloat = 42.0123;
const myString = "42.0132abc";

console.log(myString);
console.log(myFloat === myString);

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myFloat);

console.log("Number('Dave') -> " + Number("Dave"));
console.log("Number(undefined) -> " + Number(undefined));
console.log("Number(true) -> " + Number(true));
console.log("Number(false) -> " + Number(false));
console.log("Number.isInteger(myNumber) -> " + Number.isInteger(myNumber));
console.log("Number.isInteger(myString) -> " + Number.isInteger(myString));
console.log("Number.parseFloat(myString) -> " + Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat("4.2348abc").toFixed(2));
console.log(Number.isNaN("Dave"));
console.log(isNaN("Date"));
