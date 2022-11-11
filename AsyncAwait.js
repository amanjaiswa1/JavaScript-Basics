function abc() {
    let x = 2, y = 2;
    let sum = x + y;
    return sum;
}

// Async / Await ---Example 1---
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(abc());
        }, 2000);
    });
}
async function asyncCall() {
    let abc = 6;
    console.log("Calling...");
    const result = await resolveAfter2Seconds();
    console.log("After Resolve Result:", result);
    const FinalResult = result + abc;
    console.log("After Resolve Final Result :", FinalResult);
}
asyncCall();

// Async / Await ---Example 2---
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise Resolved')
    }, 3000);
});

async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promise;
    console.log(result);
    console.log("Hello!!");
}
asyncFunc();

// Async / Await ---Example 3---
let promiseNew = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve("Successfully Completed");
            console.log("Function: Your Promise Has Been Resolved");
        }
        else {
            console.log("Function: Your Promise Has Not Been Resolved");
            reject("Sorry Not Fullfilled.");
        }
    }, 3000);
});

async function asyncFuncTwo() {
    // wait until the promise resolves 
    let result = await promiseNew;
    console.log(result);
}
asyncFuncTwo();