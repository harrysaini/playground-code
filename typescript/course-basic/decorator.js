"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Test = /** @class */ (function () {
    function Test() {
        console.log("hi");
    }
    Test = __decorate([
        logged
    ], Test);
    return Test;
}());
var t = new Test();
//Factory
function logging(value) {
    return value ? logged : function () { };
}
var Car = /** @class */ (function () {
    function Car() {
        console.log("new car");
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
var c = new Car();
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Pen = /** @class */ (function () {
    function Pen(name) {
        this.name = name;
        this.className = Math.random() * 10 + name.substr(2) + "-plant";
    }
    Pen = __decorate([
        printable,
        logging(true)
    ], Pen);
    return Pen;
}());
var k = new Pen("neem");
k.print();
console.log('-------------------');
//Method decoration
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (type, propName) {
        var descriptor = {
            writable: value
        };
        return descriptor;
    };
}
function paramDeco(target, methodName, paramIndex) {
    console.log("--");
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
    console.log('--');
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.name = name;
    }
    Project.prototype.greet = function (count, message) {
        for (var i = 0; i < count; i++) {
            console.log("in" + message);
        }
    };
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "name", void 0);
    __decorate([
        __param(1, paramDeco)
    ], Project.prototype, "greet", null);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var pf = new Project('ghotala');
pf.calcBudget();
// pf.calcBudget = function () {
//     console.log(200);
// }
pf.calcBudget();
pf.greet(14, "abc");
console.log('-------------------');
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter = __decorate([
        classDecorator
    ], Greeter);
    return Greeter;
}());
console.log(new Greeter("world"));
module.exports = {};
