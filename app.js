const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

var teamMembers = []

// Function to Create Manager

function createManager() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter teammates preferred name: "
    },

    {
        type: "input",
        name: "email",
        message: "Enter teammates email address: "
    },

    {
        type: "input",
        name: "id",
        message: "Enter teammates Employee ID: "
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Enter teammates office number: "
    }]).then(function (data) {
        const manager = new Manager(data.name, data.email, data.id, data.officeNumber)
        teamMembers.push(manager)
        createTeammate()
    })
}

// Ceate Engineer Function 
function createEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter teammates preferred name: "
    },

    {
        type: "input",
        name: "email",
        message: "Enter teammates email address: "
    },

    {
        type: "input",
        name: "id",
        message: "Enter teammates Employee ID: "
    },

    {
        type: "input",
        name: "github",
        message: "Enter teammates GitHub username:  "
    }]).then(function (data) {
        const engineer = new Engineer(data.name, data.email, data.id, data.github)
        teamMembers.push(engineer)
        createTeammate()
    })
}
// Create Intern Function 

function createIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter teammates preferred name: "
    },

    {
        type: "input",
        name: "email",
        message: "Enter teammates email address: "
    },

    {
        type: "input",
        name: "id",
        message: "Enter teammates Employee ID: "
    },

    {
        type: "input",
        name: "school",
        message: "Enter teammates school name:  "
    }]).then(function (data) {
        const intern = new Intern(data.name, data.email, data.id, data.school)
        teamMembers.push(intern)
        createTeammate()
    })
}

//Create Teammate Function 
function createTeammate() {
    inquirer.prompt({
        type: "list",
        name: "newTeammate",
        message: "What type of teammate would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No More Teammates",
        ]
    }).then(function (data) {
        switch (data.newTeammate) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                buildTeam();
        }
    })
}

// Function to build your team.
function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```