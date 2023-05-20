"use strict";
// Literal types
let myName;
// myName = "John";
let userName;
userName = "Jack"; //"Richard";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(3, 4));
// logMsg(add("Jack", 5));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
const multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 5));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 10, b, c = 5) => {
    return a + b + c;
};
logMsg("addAll(2, 3, 2) : " + addAll(2, 3, 2));
logMsg("addAll(2, 3) : " + addAll(2, 3));
logMsg("sumAll(2, 3)  : " + sumAll(2, 3));
logMsg("sumAll(undefined, 3) : " + sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg("total : " + total(1, 2, 3, 4));
// never type example
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // comment this if condition then function's return type become 'never'
    }
};
// use of never type by return createError()
const numberOrString = (value) => {
    if (isString(value))
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number";
};
// Custom type guard
const isString = (value) => {
    return typeof value === "string";
};
console.log(numberOrString(32));
console.log(numberOrString("Jack"));
