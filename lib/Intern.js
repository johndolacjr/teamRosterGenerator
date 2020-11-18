// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// add school w/ getSchool() -- getRole() overridden w/ "Intern"

class Intern extends Employee {
    constructor(name, email, id, school) {
    super(name, email, id);
    this.role = "Intern";
    this.school = school;    
    }

getRole () {
    return this.role;
}

getSchool() {
    return this.school;
    }

}

module.exports = Intern;