export  = {}
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Test {
    constructor() {
        console.log("hi");
    }
}

let t = new Test()

//Factory
function logging(value: boolean): Function {
    return value ? logged : () => {};
}

@logging(true)
class Car {
    constructor() {
        console.log("new car");
    }
}

let c = new Car()

//Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@printable
@logging(true)
class Pen {
    name: string;
    className: string;
    constructor(name: string) {
        this.name = name
        this.className = Math.random() * 10 + name.substr(2) + "-plant"
    }
}

let k = new Pen("neem");
( < any > k).print();



console.log('-------------------');
//Method decoration

function editable(value: boolean): Function {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value
    }
}

function overwritable(value: boolean):Function{
    return function(type: any, propName: string){
        let descriptor : PropertyDescriptor = {
            writable: value
        } 
        return descriptor;
    }
}

function paramDeco(target: any, methodName: string , paramIndex: number){
    console.log("--")
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
    console.log('--')
}

class Project {
    @overwritable(true)
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet(count: number, @paramDeco message: string){
        for(let i =0 ;i< count; i++){
            console.log("in"+message);
        }
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

let pf = new Project('ghotala');
pf.calcBudget()
// pf.calcBudget = function () {
//     console.log(200);
// }
pf.calcBudget()
pf.greet(14, "abc")

console.log('-------------------');
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
