"use strict";
let lname;
lname = 'David';

let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25;
age = 25.5;

let dob = "25";
let result = parseInt(dob);

let isValid: boolean;
isValid = false;
console.log(isValid);

let empList: string[];
empList = ["David1", "David2", "David3"];

let numList: number[];
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "David1");
let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(num);
console.log(emp);
console.log(sum);

const enum Color{
    Red,
    Green,
    Blue   
}

let c: Color =  Color.Blue;
console.log(c);

let swapNumbs: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number,number]{
    return [num2, num1];
}

swapNumbs = swapNumbers(10,20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let department : any;
department = "IT";
department = 10;