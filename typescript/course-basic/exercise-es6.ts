export {};
{
// Exercise 1
let double1 = (value: number):number => {
    return value * 2;
};
console.log(double1(10));

// Exercise 2
let  greet1 = function (name: string = "max"):void {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");

// Exercise 3
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray = [55, 20];
Array.prototype.push(...numbers);
console.log(newArray);

// Exercise 5
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;

console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
let { firstName , experience } = scientist;
console.log(firstName, experience);

}