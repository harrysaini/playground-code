function sayHello(person) {
    console.log("Hello, " + person.name);
}
var anna = {
    name: "Anna",
    age: 23,
    greet: function () {
        console.log("hello world from " + this.name);
    }
};
var Insaan = /** @class */ (function () {
    function Insaan() {
    }
    Insaan.prototype.greet = function () {
        console.log("hello world from " + this.name);
    };
    return Insaan;
}());
var ram = new Insaan();
ram.age = 9999;
ram.name = "ram";
var kaka = new Insaan();
kaka.name = "dawd";
kaka.hobbies = ['cooking', "nachna"];
kaka.greet();
var abc = {
    name: "aa"
};
console.log(abc);
sayHello(anna);
sayHello(ram);
sayHello(kaka);
anna.greet();
kaka.greet();
ram.greet();
console.log(kaka);
var multiplyDouble = function (num1, num2) {
    return 2 * num1 * num2;
};
console.log(multiplyDouble(3, 4));
var tj = {
    name: "tj",
    age: 21,
    greet: function () {
        console.log("i am coder");
    },
    languages: ['go', 'javascript', 'ruby'],
    score: 12323,
    repoCount: 312
};
console.log(tj);
