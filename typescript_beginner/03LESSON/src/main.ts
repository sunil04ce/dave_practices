let stringArray = ["one", "hey", "jack"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1985, true];

stringArray[0] = "John"; //42;
stringArray.push("Hey");

guitars[0] = 1986;
guitars.unshift("Jim");
// guitars.push(true);

// stringArray = guitars;
guitars = stringArray;

// guitars = mixedData;
mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");
// bands.push(true);

// Tuple
let myTuple: [string, number, boolean] = ["Jack", 37, true];

let mixed = ["Jim", 38, false];

mixed = myTuple;
// myTuple = mixed;

myTuple[1] = 42;
// myTuple[2] = 42;
// myTuple[3] = 42;

// Object
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

console.log(typeof myObj);
