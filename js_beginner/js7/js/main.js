// Functions
function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }

    return num1 + num2;
}

console.log(sum(2));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserNameFromEmail("dave@github.com"));

const getUserNameFromEmailUsingArrow = (email) => email.slice(0, email.indexOf('@'));

console.log(getUserNameFromEmailUsingArrow("dave@gmail.com"))

const toProperCase = (myName) => {
    return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
};

console.log(toProperCase("daVe"));
