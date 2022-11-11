// Callbacks ---Example 1---
var test = (a, callback) => {
    console.log(a);
    callback();
};

var demo = () => {
    console.log("Hello World!");
};

test(2, demo);

// Callbacks ---Example 2---
function sum(a, b, callbackOne, callbackTwo) {
    callbackOne();
    console.log("First No. " + a + "\nSecond No. " + b);
    let c = a + b;
    callbackTwo(c);
}

var start = () => {
    console.log(":: Sum Of Two Numbers ::");
};

var result = (r) => {
    console.log("Result : " + r);
};

sum(5, 8, start, result);

// Callbacks ---Example 3---
function words(a, b, callbackOne, callbackTwo) {
    callbackOne(a);
    callbackTwo(b);
}

var one = (a) => {
    console.log("1 in words : " + a);
};

var two = (b) => {
    console.log("2 in words : " + b);
};

words("One", "Two", one, two);