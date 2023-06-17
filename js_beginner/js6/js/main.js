// Loops

let myNumber = 0;

while (myNumber < 50) {
    myNumber++;
    console.log(myNumber);
}

console.log("\n\nDecrease number by 5 --> \n")
do {
    myNumber -= 5;
    console.log(myNumber)
} while (myNumber > 0);

console.log("\n\nFor loop example: \n")
for (let i = 1; i <= 5;) {
    console.log(i);
    i++;
}

console.log("\nFor loop");
let myName = "Dave";
for (let i = 0; i < myName.length; i++) {
    console.log(myName.charAt(i));
}

console.log("\nwhile(true)");
let counter = 0;
while (true) {
    if (counter == myName.length)
        break;
    console.log(myName[counter++]);
}

