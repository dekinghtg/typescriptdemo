"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 4));
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 3));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(7, 5));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[2, 3, 4]));
console.log(add2(2, 3, 4, 5, 6, 7, 8, 9));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult);
console.log(concatString);
