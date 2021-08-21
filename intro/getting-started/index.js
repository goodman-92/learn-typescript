"use strict";
exports.__esModule = true;
var sum_1 = require("./sum");
var b = 'a';
var arrFunc = function () { return "arrFunc"; };
var result = sum_1.sum(10, 20); // compile
var nullish = null;
var a = nullish !== null && nullish !== void 0 ? nullish : 'null 리싱';
// npm i typescript -g npm,
// node package manger
// tsc 파일이름 => 컴파일해준다(사실 트랜스파일)
// playground 로 활용 가능 하다.
// 컴파일시에슨 tsc project .
console.log(result, a);
