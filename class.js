"use strict";
// class Employee {
//     id!: number;
//     name!: string;
//     address!: string;
// }
//constructor
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`; //better way
        //return this.name + " " + this.address;
    }
}
let john = new Employee(1, "John", "Highway 71");
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
console.log(john);
let address = john.getNameWithAddress();
console.log(address);
