// ------Passing Function as a Parameter------
const add = (n1, n2) => {
    return n1 + n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const calculate = (operation, n1, n2) => {
    let answer = operation(n1, n2);
    return answer;
}

let result1 = calculate(add, 4, 4);     // passing function as a parameter
let result2 = calculate(multiply, 4, 4);     // passing function as a parameter

console.log("Sum: " + result1);
console.log("Multiplication: " + result2);

// ------Passing & Returning Function as a Parameter------
const display = (answer) => {
    console.log("Result: " + answer);
}

const subtract = (n1, n2) => {
    return n1 - n2;
}

const calculate2 = (operation, n1, n2) => {
    let answer = operation(n1, n2);
    return display(answer);     // returning function
}

calculate2(subtract, result2, result1);     // passing function as a parameter