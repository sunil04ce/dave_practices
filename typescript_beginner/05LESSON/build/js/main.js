"use strict";
// convert to more or  less specific type
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let nextVal = addOrConcat(2, 2, "add");
//10 as string;
10; // double casting, double assertion
// The DOM
//const img = document.getElementById("img")
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src = "";
myImg.src = "";
nextImg.src = "";
