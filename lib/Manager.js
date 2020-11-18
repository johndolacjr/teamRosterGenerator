// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// office number/ over rides the getRole() to return Manager

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;