// Program to print Fibonacci Series

const prompt = require('prompt-sync')();
const number = prompt("Enter the number of Fibonacci terms you want: ");
let first = 0, second = 1;
console.log(first);
console.log(second);
for (i = 2; i < number; i++) {
    nextTerm = first + second;
    console.log(nextTerm);
    first = second;
    second = nextTerm;
}