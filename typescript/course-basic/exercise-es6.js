"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
{
    // Exercise 1
    var double1 = function (value) {
        return value * 2;
    };
    console.log(double1(10));
    // Exercise 2
    var greet1 = function (name) {
        if (name === void 0) { name = "max"; }
        if (name === undefined) {
            name = "Max";
        }
        console.log("Hello, " + name);
    };
    greet1();
    greet1("Anna");
    // Exercise 3
    var numbers_1 = [-3, 33, 38, 5];
    console.log(Math.min.apply(Math, numbers_1));
    // Exercise 4
    var newArray_1 = [55, 20];
    (_a = Array.prototype).push.apply(_a, numbers_1);
    console.log(newArray_1);
    // Exercise 5
    var testResults_1 = [3.89, 2.99, 1.38];
    var result1_1 = testResults_1[0], result2_1 = testResults_1[1], result3_1 = testResults_1[2];
    console.log(result1_1, result2_1, result3_1);
    // Exercise 6
    var scientist = { firstName: "Will", experience: 12 };
    var firstName_1 = scientist.firstName, experience_1 = scientist.experience;
    console.log(firstName_1, experience_1);
}
