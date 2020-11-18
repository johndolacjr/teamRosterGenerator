// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('.Employee.js');

// add GitHub Username[note: gitHub()]... getRole() gets overidden to return "Engineer"
class Engineer {
    constructor(name, email, id, role = "Engineer", github) {
    super(name, email, id);
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.github = github;    
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

getGithub() {
    return this.github;
    }

}

module.exports = Engineer;

