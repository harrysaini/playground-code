"use strict";
exports.__esModule = true;
var https_1 = require("https");
var crypto_1 = require("crypto");
var fs_1 = require("fs");
var start = Date.now();
var doRequest = function (i) {
    https_1.request("https://www.google.com", function (res) {
        res.on("data", function () { });
        res.on("end", function () {
            console.log("http: " + i + ": " + (Date.now() - start) + " ");
        });
    }).end();
};
doRequest(1);
fs_1.readFile('async.js', 'utf-8', function () {
    console.log("fs: " + (Date.now() - start) + " ");
});
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
