//simple generic
function echo(data:any) {
    return data;
}
console.log(echo("Hello"))
console.log(echo(5))
console.log(echo({a:5}))
console.log("-----------------------");

//better generic
function betterEcho<P>(data: P): P{
    return data;
}
console.log(betterEcho("Hello"))
console.log(betterEcho<number>(5))
console.log(betterEcho({a:5}) )
console.log("-----------------------");

//Built in generics

let marks:Array<number> = [3,5,6,7]
marks.push(5)
//marks.push("56"); fails
console.log(marks)

let pom:string[] = ["mvn",'node','js'] 
//pom.push(4);
pom.push("dsd");
console.log(betterEcho(pom))

console.log("-----------------------");

//Arrays args
function printAll<T>(args: T[]){
    args.forEach((val) => {
        console.log(val)
    });
}
printAll(marks)
printAll<string>(pom)
console.log("-----------------------");

//types generic
const echo2: <T>(data: T) => T = betterEcho;
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

class SimpleMath<T extends number | string, U extends number | string>{
    baseValue: T;
    multiplyValue: U;
    multiply(): {
        return +this.baseValue * +this.multiplyValue;
    }
}

let simple = new SimpleMath<string, number>();
simple.baseValue = "10";
simple.multiplyValue = 4;
console.log(simple.multiply());

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = "dsad";
myGenericNumber.add = function(x, y) { return x + y; };