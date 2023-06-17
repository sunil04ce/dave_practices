// let myBoolean = confirm("OK ==> True \nCancel ==> False")
// console.log(myBoolean)

let myName = prompt("Please enter your name.");
console.log(typeof myName);

if (myName) { //} && myName.length > 0) {
    //console.log(myName ?? "You didn't entered your name");
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
} else {
    console.log("You didn't entered your name");
}

