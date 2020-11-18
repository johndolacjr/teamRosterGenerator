// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('.Employee.js');

// office number/ over rides the getRole() to return Manager

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;    
    }

// getName() {
//     return this.name;
// }

// getEmail() {
//     return this.email;
// }

// getId() {
//     return this.id;
// }

getRole () {
    return "Manager";
}

getOfficeNumber() {
    return this.officeNumber;
    }

}

module.exports = Manager;