define("sum", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.sum = void 0;
    function sum(a, b) {
        return a + b;
    }
    exports.sum = sum;
    function min(a, b) {
        return a / b;
    }
});
define("index", ["require", "exports", "sum"], function (require, exports, sum_1) {
    "use strict";
    exports.__esModule = true;
    var b = 'a';
    var arrFunc = function () { return "arrFunc"; };
    var result = sum_1.sum(10, 20);
    var nullish = null;
    var a = nullish !== null && nullish !== void 0 ? nullish : 'null 리싱';
    console.log(result, a);
});
//# sourceMappingURL=all.js.map