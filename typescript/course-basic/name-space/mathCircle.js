"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function getCircumferenceOfCircle(diameter) {
            return diameter * PI;
        }
        Circle.getCircumferenceOfCircle = getCircumferenceOfCircle;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
