// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Need to link to Employee Folder

// office number/ over rides teh getRole() to return Manager

class Manager {
    constructor(name, email, id, role = "Manager", officeNumber) {
    super(name, email, id)
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.officeNumber = officeNumber;    
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
    return this.officeNumber;
    }

}

module.exports = Manager;