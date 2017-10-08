"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Math.sign doesn't exist until ES2015
var sign = function (n) {
    if (n < 0)
        return -1;
    if (n > 0)
        return 1;
    return 0;
};
function range(end, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    // if the param order was range(start, end), typescript would require python's range(10) to be written as range(undefined, 10).
    // a little hacky silliness here to prevent a lot of silliness elsewhere.
    if (sign(end - start) !== sign(step)) {
        step = -step;
    }
    var n = [];
    for (var i = start; (start < end && i < end) || (end < start && i > end); i += step) {
        n.push(i);
    }
    return n;
}
exports.default = range;
//# sourceMappingURL=range.js.map