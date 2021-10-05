const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


var tempArr = [];
let tempHTML = [];


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
            
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            makeHTML(responses)
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
            
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            makeHTML(responses)
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
            
            inquirer.prompt(moreEmployees)
                .then(responses => {
                    switch (responses.continue) {
                        case "Yes":
                            start()
                            break;
                        case "No":
                            makeHTML(responses)
                            break;
                        default:
                            break;
                    }
                })
        })
}





const htmlHeader = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link  rel="stylesheet" href="./style.css">
    <title>Team Cards</title>
</head>
<body>
<header class='masthead'>
 <h1 class='masthead-heading'>The Team!</h1>
</header>
<div class="arrange">
`;

// complete card, might need to be broken up further

function managerCard(responses) { return `     <div class="card better" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${responses.getRole()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Office number: ${responses.getOffice()}</h6>
  <a href="#" class="card-link">${responses.getEmail()}</a>
  
</div>
</div>`}

function engineerCard(responses) { return `     <div class="card better" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${responses.getRole()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
  <h6 class="card-subtitle mb-2 text-muted"></h6>
  <a href="#" class="card-link">${responses.getEmail()}</a>
  <a href="${responses.getGithub()}" class="card-link">${responses.getGithub()}</a>
</div>
</div>`}

function internCard(responses) { return `     <div class="card better" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${responses.getRole()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
  <h6 class="card-subtitle mb-2 text-muted">School: ${responses.getSchool()}</h6>
  <a href="#" class="card-link">${responses.getEmail()}</a>
  
</div>
</div>`}


const htmlFooter = `</div></body>`

function makeHTML() {
  tempHTML.push(htmlHeader);

//   for (let i = 0; i < tempArr.length; i++) {
//       const employee = tempArr[i]
//       console.log(employee)
//     switch (employee.role) {
//     case "Manager":
//         const managerC = managerCard(responses)
//       tempHTML.push(managerC);
//       break;
//     case "Engineer":
//         const engineerC = engineerCard(responses)
//       tempHTML.push(engineerC);
//       break;
//     case "Intern":
//         const internC = internCard(responses)
//       tempHTML.push(internC);
//       break;
//     default:
//       break;
//   }
//   }

  tempArr.forEach(responses => {
    
  
  switch (responses.getRole()) {
    case "Manager":
      tempHTML.push(managerCard(responses));
      break;
    case "Engineer":
      tempHTML.push(engineerCard(responses));
      break;
    case "Intern":
      tempHTML.push(internCard(responses));
      break;
    default:
      break;
  }});
  
  tempHTML.push(htmlFooter);

  tempHTML = tempHTML.join('')
  

  fs.writeFile('./dist/index.html', tempHTML.toString(), (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
}


start()

