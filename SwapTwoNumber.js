// Program to Swap Two Number without using temporary variable
const prompt = require('prompt-sync')();
let x = prompt("Enter a value for x : ");
let y = prompt("Enter a value for Y : ");
console.log("x = " + x);
console.log("y = " + y);

// Code to swap 'x' and 'y'
x = x * y;
y = x / y;
x = x / y;

console.log("\nAfter Swaping:");
console.log("x = " + x);
console.log("y = " + y);

