// ------Functions------
function greet()
{
    console.log("Hello")
}
greet();

var ab=5;

//with parameters
function sum(a,b)
{
   var ab=10;
    console.log("ab:(inside)",ab);
    console.log("sum:", a+b)
}
sum(2,3);

console.log("ab:(outside)",ab);

// ------Anonymous Function------
(p1,p2) =>{
    console.log(p1+p2);
    return "ABC"
};

// ------Arrow Function------
let test= (a,b) => {
    console.log("in arrow function",a+b)
};
test(1,2);