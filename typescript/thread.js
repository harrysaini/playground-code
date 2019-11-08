"use strict";
exports.__esModule = true;
process.env.UV_THREADPOOL_SIZE = 5;
var crypto_1 = require("crypto");
var start = Date.now();
crypto_1.pbkdf2('a', 'b', 100000, 512, 'sha512', function (err, key) {
    console.log("1: " + (Date.now() - start) + " ");
});
crypto_1.pbkdf2('a', 'b', 100000, 512, 'sha512', function (err, key) {
    console.log("2: " + (Date.now() - start));
});
crypto_1.pbkdf2('a', 'b', 100000, 512, 'sha512', function (err, key) {
    console.log("3: " + (Date.now() - start) + " ");
});
crypto_1.pbkdf2('a', 'b', 100000, 512, 'sha512', function (err, key) {
    console.log("4: " + (Date.now() - start));
});
crypto_1.pbkdf2('a', 'b', 100000, 512, 'sha512', function (err, key) {
    console.log("5: " + (Date.now() - start));
});
