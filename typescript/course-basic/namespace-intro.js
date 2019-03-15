"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function getCircumferenceOfCircle(diameter) {
        return diameter * PI;
    }
    MyMath.getCircumferenceOfCircle = getCircumferenceOfCircle;
    function getCircumferenceOfRectangle(length, breadth) {
        return 2 * (length + breadth);
    }
    MyMath.getCircumferenceOfRectangle = getCircumferenceOfRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.getCircumferenceOfRectangle(3, 4));
