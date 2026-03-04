// Printing output
console.log("Hello, World!");

// Variables
let name = "Nila";
let age = 20;
const pi = 3.14;

// Conditional Statement
if (age >= 18) {
  console.log(name + " is eligible to vote.");
} else {
  console.log(name + " is not eligible to vote.");
}

// Function
function greet(userName) {
  return "Welcome, " + userName + "!";
}

console.log(greet(name));

// Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// Array
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
