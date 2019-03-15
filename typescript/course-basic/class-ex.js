"use strict";
{
    // Exercise 1 - How was your TypeScript Class?
    var Car = /** @class */ (function () {
        function Car(name) {
            this.acceleration = 0;
            this.name = name;
        }
        Car.prototype.honk = function () {
            console.log("Toooooooooot!");
        };
        ;
        Car.prototype.accelerate = function (speed) {
            this.acceleration = this.acceleration + speed;
        };
        return Car;
    }());
    var car = new Car("BMW");
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);
    // Exercise 2 - Two objects, based on each other ...
    var Rectangle = /** @class */ (function () {
        function Rectangle(width, length) {
            this.width = 0;
            this.length = 0;
            this.width = width;
            this.length = length;
        }
        Rectangle.prototype.calcSize = function () {
            return this.width * this.length;
        };
        ;
        return Rectangle;
    }());
    var rectangle = new Rectangle(3, 4);
    console.log(rectangle.calcSize());
    // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
    var Person = /** @class */ (function () {
        function Person() {
            this._firstName = "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._firstName = value;
                }
                else {
                    this._firstName = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    ;
    var person = new Person();
    console.log(person.firstName);
    person.firstName = "Ma";
    console.log(person.firstName);
    person.firstName = "Maximilian";
    console.log(person.firstName);
}
