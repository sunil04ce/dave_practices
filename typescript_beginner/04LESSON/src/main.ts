// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types

let myName: "Jack";
// myName = "John";

let userName: "Jack" | "John" | "Amy";
userName = "Jack"; //"Richard";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(3, 4));
// logMsg(add("Jack", 5));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

const multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 5));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default param value
const sumAll = (a: number = 10, b: number, c: number = 5): number => {
  return a + b + c;
};

logMsg("addAll(2, 3, 2) : " + addAll(2, 3, 2));
logMsg("addAll(2, 3) : " + addAll(2, 3));
logMsg("sumAll(2, 3)  : " + sumAll(2, 3));
logMsg("sumAll(undefined, 3) : " + sumAll(undefined, 3));

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg("total : " + total(1, 2, 3, 4));

// never type example
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // comment this if condition then function's return type become 'never'
  }
};

// use of never type by return createError()
const numberOrString = (value: string | number): string => {
  if (isString(value)) return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};

// Custom type guard
const isNumber = (value: any) => {
  return typeof value === "number";
};

// Custom type guard
const isString = (value: any) => {
  return typeof value === "string";
};

console.log(numberOrString(32));
console.log(numberOrString("Jack"));
