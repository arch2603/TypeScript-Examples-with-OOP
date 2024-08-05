"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let newCustomer = new Customer("Martin", "Luther");
// newCustomer.firstName = "Martin";
// newCustomer.lastName = "Luther";
console.log(newCustomer.firstName);
console.log(newCustomer.lastName);
