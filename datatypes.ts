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
console.log(results);