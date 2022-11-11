// ------Default Function Parameters------
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(3, 3));

// ------Templates Literals------
let firstName = "Aman";
let lastName = "Jaiswal";
console.log(`Your name is ${firstName} ${lastName}`);

// ------Multiline Strings------
let greet = `Hello!
Good Morning,
How Are You?`;
console.log(greet);

// ------Spread Operator------
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

var arr4 = arr1.concat(arr2);
console.log(arr4);

var obj1 = {
    foo: "bar",
    x: 42,
};

var obj2 = {
    foo: "baz",
    y: 13,
};

var cloneObj = { ...obj1 };
console.log(cloneObj);

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// ------Destructing Assignment------
let arr = [10, 20, 30, 40, 50];

let [a, b, ...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);
console.log(a, b, rest);

const [red, yellow, green] = ["One", "Two", "Three"];
console.log(red);
console.log(yellow);
console.log(green);

// ------Obj------
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a);
console.log(b);
console.log(rest);

const user = {
    number: 42,
    isVerified: true
};

const { number, isVerified } = user;
console.log(number);
console.log(isVerified);