function abc() {
    let x = 2, y = 2;
    let sum = x + y;
    return sum;
}

// Promise ------Exmaple 1------
const xyz = () => {
    return new Promise((resolve, reject) => {
        let flag = false;
        if (flag) {
            resolve(abc());
        }
        else {
            reject("Promise Rejected.");
        }
    });
};
xyz()
    .then((data) => console.log("After Resolve :", data))
    .catch((error) => console.log("After Resolve :", error));

// Promise ------Example 2------
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: Your Promise Has Been Resolved");
                resolve();
            }
            else {
                console.log("Function: Your Promise Has Not Been Resolved");
                reject("Sorry Not Fullfilled.");
            }
        }, 2000);
    });
}
func1()
    .then(function () {
        console.log("Aman: Thanks For Resolving.");
    })
    .catch(function (error) {
        console.log("Aman: Very Bad Bro. " + error);
    });

