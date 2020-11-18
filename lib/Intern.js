// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('.Employee.js');


// add school w/ getSchool() -- getRole() overridden w/ "Intern"

class Intern {
    constructor(name, email, id, role = "Intern", school) {
    super(name, email, id);
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.school = school;    
    }

getName() {
    return this.name;
}

getEmail() {
    return this.email;
}

getId() {
    return this.id;
}

getRole () {
    return this.role;
}

getSchool() {
    return this.school;
    }

}

module.exports = Intern;