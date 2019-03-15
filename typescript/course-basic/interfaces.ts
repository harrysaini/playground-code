interface Person {
    name: string;
    age : number; //optional
    [propName: string]: any; //kuch nhi pta property ka,
    greet():void;
}

function sayHello(person: Person): void {
    console.log("Hello, " + person.name)
}

let anna: Person = {
    name: "Anna",
    age: 23,
    greet(){
        console.log("hello world from "+ this.name)
    }
}


class Insaan implements Person{
    name: string;
    age: number;
    hobbies: string[];
    greet(){
        console.log("hello world from "+ this.name)
    }
}

let ram = new Insaan();
ram.age =  9999
ram.name =  "ram"

let kaka = new  Insaan();
kaka.name = "dawd"
kaka.hobbies = ['cooking', "nachna"]
kaka.greet()


const abc = {
    name: "aa"
}

console.log(abc)

sayHello(anna)
sayHello(ram)
sayHello(kaka)
anna.greet();
kaka.greet()
ram.greet()
console.log(kaka)


//Function types

interface MathFunction{
    (val1: number, val2: number):number;
}

let multiplyDouble = (num1: number, num2: number):number => {
    return 2 * num1 * num2;
}

console.log(multiplyDouble(3, 4))

//inheritance
interface Coder extends Person{
    languages: string[],
    score: number,
    repoCount: number
}

let tj:Coder = {
    name: "tj",
    age: 21,
    greet(){
        console.log("i am coder")
    },
    languages: ['go', 'javascript', 'ruby'],
    score: 12323,
    repoCount: 312
} 

console.log(tj)

