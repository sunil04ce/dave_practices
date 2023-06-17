console.log("Math.PI -> " + Math.PI);
console.log("Math.trunc(Math.PI) -> " + Math.trunc(Math.PI));
console.log("Math.round(3.4) -> " + Math.round(3.4));
console.log("Math.round(3.5) -> " + Math.round(3.5));
console.log("Math.ceil(3.4) -> " + Math.ceil(3.4));
console.log("Math.floor(3.4) -> " + Math.floor(3.4));
console.log("Math.pow(5,2) -> " + Math.pow(5, 2));
console.log("Math.min(2, 0.5, 9, 5, 1) -> " + Math.min(2, 0.5, 9, 5, 1));
console.log("Math.max(2, 0.5, 9, 5, 1) -> " + Math.max(2, 0.5, 9, 5, 1));
console.log("Math.random() -> " + Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const myName = "David Gray";
const randomChar = myName.charAt(Math.floor(Math.random() * myName.length));
console.log(randomChar);