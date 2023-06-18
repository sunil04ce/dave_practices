"use strict";
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
let bands = [];
bands.push("Van Halen");
// bands.push(true);
// Tuple
let myTuple = ["Jack", 37, true];
let mixed = ["Jim", 38, false];
mixed = myTuple;
// myTuple = mixed;
myTuple[1] = 42;
// myTuple[2] = 42;
// myTuple[3] = 42;
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
console.log(typeof myObj);
const exampleObj = {
    prop1: "Karl",
    prop2: true,
};
exampleObj.prop1 = "Jack"; //42;
// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// };
let evh = {
    name: "Jack",
    active: false,
    albums: [1985, 5051, "BHT902"],
};
let jp = {
    //name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
// evh.years = 40;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    else {
        return "Hello!";
    }
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 10] = "U";
    Grade[Grade["D"] = 11] = "D";
    Grade[Grade["C"] = 12] = "C";
    Grade[Grade["B"] = 13] = "B";
    Grade[Grade["A"] = 14] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
