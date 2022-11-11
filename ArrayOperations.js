// ------Array Operations------
let fruits = ["Apple", "Orange", "Kiwi"];

// ------Length of array------
console.log(fruits.length);

// ------Access an Array item using the index position------
let first = fruits[0];
console.log(first);

let last = fruits[fruits.length - 1];
console.log(last);

// ------Loop over an Array------
fruits.forEach((data, index) => {
    console.log(index, data);
});

// -------Add and Remove element at the end of an Array------
console.log("Added :");
fruits.push("Mango");   // Add the element
console.log(fruits);

console.log("Removed : " + fruits.pop());   // Remove the element
console.log(fruits);

// ------Add and Remove element at the beginning of an Array------
console.log("Added :");
fruits.unshift("Mango");   // Add the element
console.log(fruits);

console.log("Removed : " + fruits.shift());   // Remove the element
console.log(fruits);

// ------Find the index of an item in the Array------
let pos = fruits.indexOf("Kiwi");
console.log("Index : ", pos);
console.log("Array Elements:", fruits);

// ------Splice------
{
    const fruits = ["Orange", "Apple", "Mango"];
    fruits.splice(1, 1);    // This will Remove  element of Index 1
    console.log(fruits);

    fruits.splice(1, 0, "Strawberry");    // This will Add one element at Index 1
    console.log(fruits);

    fruits.splice(0, 2, "Kiwi");    // Removes the first 2 elements and add KIWI
    console.log(fruits);
}

// ------Slice------
let text = "Hello Hi";
let afterSlice = text.slice(0, 5);
console.log(afterSlice);

// ------Split------
let afterSplit = text.split(" ");
console.log(afterSplit[0]);
console.log(afterSplit[1]);

// ------Combinig Two Arrays------
{
    const fruits = ["Banana", "Orange"];
    const fruits1 = ["Apple"];
    let newFruits = fruits.concat(fruits1);    // Using concat
    console.log(newFruits);

    let newArray = [...fruits, ...fruits1].toString();   // Using iterator
    console.log(newArray);

    let joinFruits = newFruits.join("@");    // Using Join
    console.log(joinFruits);
}

// ------Sorting------
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort());
}

// ------Reverse------
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.reverse());
}

// ------Map------
const cities = ["ny", "la", "tx"];
let output = cities.map((data) => {
    console.log(data.toUpperCase())
});

const numbers = [45, 4, 9, 16, 25, 2];
let outputN = numbers.map((data) => data * 2);
console.log(outputN);

// ------Filter------
{
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);
    console.log(over18);

    function myFunction(value, index, array) {
        return value > 18;
    }
}

// ------Reduce------
{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);
    console.log(sum);
    function myFunction(total, value) {
        return total + value;
    }
}
