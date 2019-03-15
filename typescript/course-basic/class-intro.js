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
var Banda = /** @class */ (function () {
    function Banda(name, username) {
        this.username = username;
        this.name = name;
    }
    Banda.prototype.setAge = function (age) {
        this.age = age;
    };
    Banda.prototype.printAge = function () {
        console.log(this.age);
    };
    Banda.prototype.printType = function () {
        console.log(this.type);
    };
    return Banda;
}());
var don = new Banda('Don', 'don123');
don.setAge('34');
console.log(don);
don.printAge();
don.printType();
//inheritance
var Saini = /** @class */ (function (_super) {
    __extends(Saini, _super);
    //name = "Don"
    function Saini(userName) {
        var _this = _super.call(this, "Don", userName) || this;
        _this.age = '31';
        return _this;
    }
    return Saini;
}(Banda));
var s = new Saini('don');
console.log(s);
console.log('//getter settter');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "lehsun";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "loda lele";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "as";
console.log(plant.species);
plant.species = "hello world";
console.log(plant.species);
//static
console.log('----------------');
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (daimeter) {
        return daimeter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(Helper.PI);
console.log(Helper.calcCircumference(12));
//Abstract class
var Project = /** @class */ (function () {
    function Project() {
        this.name = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget + Math.random() * this.budget;
    };
    return Project;
}());
var LodanProject = /** @class */ (function (_super) {
    __extends(LodanProject, _super);
    function LodanProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LodanProject.prototype.changeName = function (name) {
        this.name = name;
    };
    return LodanProject;
}(Project));
var pecFest = new LodanProject();
console.log(pecFest);
pecFest.changeName('pecfest');
console.log(pecFest);
console.log(pecFest.calcBudget());
