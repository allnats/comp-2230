/*
  This is a multi-line comment.
  Name: Allendale Nato
  Date: September 23, 2025
  Info: This is an introduction to JavsScript.
*/

// Single Line Comment

// Variables
const neverChange = 404; // Constant number.
let welcomeMessage = "Hello, who might you be?"; // Mutable string
var legacyVariable = "I am from olden times"; // Deprecated

// Data Types
let userGreeting = "Welcome to our page";
let userScore = 100;
let sessionActive = true;
let userProfile = {
    name: "Guest",
    score: userScore,
};
let colourOptions = ["Red", "Blue", "Green"];

// String manipulation
let userName = "Guest";
let personalizeGreeting = "Hello, " + userName;
console.log(personalizeGreeting);

personalizeGreeting = `Hello, ${userName}`;
console.log(personalizeGreeting);

// Conditional statements
if (true) {
    console.log("Do this.");
}

let userAge = 17;
if (userAge >= 18) {
    console.log("You are eligible to vote.");
}

if (userAge < 18) {
    console.log("You are not eligible to vote.");
} else if (userAge >= 18 && userAge < 65) {
    console.log("You are eligible and required to vote.");
} else {
    console.log("You are eligible but not required to vote.");
}

// Ternary operator
let message =
    userAge >= 18
        ? "You are eligible to vote."
        : "You are not eligible to vote.";
console.log(message);

let daysUntilBirthday = 5;
let birthdayMessage =
    daysUntilBirthday === 1
        ? "Your birthday is tomorrow"
        : "Your birthday is coming up";

// For loops
for (let i = 0; i < colourOptions.length; i++) {
    console.log(colourOptions[i]);
}

colourOptions.forEach((colour) => console.log(colour));
