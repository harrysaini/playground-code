"use strict";
var MyMath;
(function (MyMath) {
    function getCircumferenceOfRectangle(length, breadth) {
        return 2 * (length + breadth);
    }
    MyMath.getCircumferenceOfRectangle = getCircumferenceOfRectangle;
})(MyMath || (MyMath = {}));
