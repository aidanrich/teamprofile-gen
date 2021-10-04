const inquirer = require('inquirer');
const fs = require('fs');

// const employee = new Employee();
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const renderHTML = require("./src/renderHTML");

var tempArr = []


// Questions should loop 
// We need to make seperate cards for each employee
// classes need tdd


// Break up questions into functions
// assemble the html pieces in another function




function start() {
    const whichEmployee = {
        type: 'list',
        message: 'Please pick a role at the company',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    }

    inquirer.prompt(whichEmployee)
        .then((responses) => {
            switch (responses.role) {
                case "Manager":
                    makeManager()
                    break;
                case "Engineer":
                    makeEngineer()
                    break;
                case "Intern":
                    makeIntern()
                    break;
                default:
                    break;
            }
        })
}

const moreEmployees = {
    type: 'list',
    message: 'Would you like add another employee?',
    name: 'continue',
    choices: ["Yes", "No"]
}
// Switch case?

function makeManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employee email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'office',
        }
    ])
        .then(responses => {
            const manager = new Manager(responses.name, responses.id, responses.email, responses.office)
            tempArr.push(manager)
            console.log(tempArr);
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            // writefile
                            break;
                        default:
                            break;
                    }
                })
        })
}

function makeEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employee email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer Github profile?',
            name: 'github',
        }
    ])
        .then(responses => {
            const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
            tempArr.push(engineer)
            console.log(tempArr);
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            // writefile
                            break;
                        default:
                            break;
                    }
                })
        })
}

function makeIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employee email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of your school?',
            name: 'school',
        }
    ])
        .then(responses => {
            const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
            tempArr.push(intern)
            console.log(tempArr);
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            // writefile
                            break;
                        default:
                            break;
                    }
                })
        })
}

start()












// inquirer
//     .prompt(employeeQuestions)
//     .then((responses) => {

//         fs.appendFile('./dist/index.html', `<!DOCTYPE html>
//                <html lang="en">
//                <head>
//                    <meta charset="UTF-8">
//                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
//                    <link  rel="stylesheet" href="./style.css">
//                    <title>Team Cards</title>
//                </head>
//                <body>
//                <header class='masthead'>
//                 <h1 class='masthead-heading'>The Team!</h1>
//             </header>
                //    <div class="card" style="width: 18rem;">
                //        <div class="card-body">
                //          <h5 class="card-title">${responses.role}</h5>
                //          <h6 class="card-subtitle mb-2 text-muted">${responses.name}</h6>
                //          <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.id}</h6>
                //          <h6 class="card-subtitle mb-2 text-muted">Office number: ${responses.office}${responses.school}</h6>
                //          <a href="#" class="card-link">${responses.email}</a>
                //          <a href="#" class="card-link">${responses.github}</a>
                //        </div>
                //      </div>

//                </body>
//                </html>` , (err) =>
//                 err ? console.error(err) : console.log('Commit logged!'))


//     })
