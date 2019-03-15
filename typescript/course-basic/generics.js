//simple generic
function echo(data) {
    return data;
}
console.log(echo("Hello"));
console.log(echo(5));
console.log(echo({ a: 5 }));
console.log("-----------------------");
//better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Hello"));
console.log(betterEcho(5));
console.log(betterEcho({ a: 5 }));
console.log("-----------------------");
//Built in generics
var marks = [3, 5, 6, 7];
marks.push(5);
//marks.push("56"); fails
console.log(marks);
var pom = ["mvn", 'node', 'js'];
//pom.push(4);
pom.push("dsd");
console.log(betterEcho(pom));
console.log("-----------------------");
//Arrays args
function printAll(args) {
    args.forEach(function (val) {
        console.log(val);
    });
}
printAll(marks);
printAll(pom);
console.log("-----------------------");
//types generic
var echo2 = betterEcho;
console.log(echo2(pom));
console.log("-----------------------");
//generic class
// class SimpleMath<T>{
//     baseValue: T;
//     multiplyValue: T;
//     multiply(){
//         return +this.baseValue * +this.multiplyValue;
//     }
// }
// let simple = new SimpleMath();
// simple.baseValue = "asdas";
// simple.multiplyValue = 4;
// console.log(simple.multiply());
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.multiply = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simple = new SimpleMath();
simple.baseValue = "10";
simple.multiplyValue = 4;
console.log(simple.multiply());
