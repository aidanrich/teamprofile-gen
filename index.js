const inquirer = require('inquirer');
const fs = require('fs');


// const employee = new Employee();

const employeeQuestions = [
    {
        type: 'checkbox',
        message: 'Please pick a role at the company',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    },
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
        type: "input",
        name: "github",
        message: "Enter your github username:",
        when: (answers) => {
            if (answers.employeeTitle === "Engineer") {
                return true;
            }
        }
    },
   {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'office',
        when: (answers) => {
            if (answers.employeeTitle === "Manager") {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the interns school?',
        name: 'school',
        when: (answers) => {
            if (answers.employeeTitle === "Intern") {
                return true;
            }
        }
    }, 
]

// const managerQuestions = {
//     type: 'input',
//     message: 'What is the managers office number?',
//     name: 'office'
// };
// const engineerQuestions = {
//     type: 'input',
//     message: 'What is the engineers github profile?',
//     name: 'github'
// };

// const internQuestions = {
//     type: 'input',
//     message: 'What is the interns school?',
//     name: 'school'
// };

// loop code
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer.prompt({
    type: "loop",
    name: "items",
    message: "Add an employee?",
    questions: [
        {
            type: "input",
            name: "key",
            message: "Enter item key",
        },
        {
            type: "input",
            name: "value",
            message: "Enter item value",
        },
    ],
});





// inquirer
//     .prompt(employeeQuestions)
//     .then((responses) => {
//         if (responses.role[0]) {
//              (err) =>
//             err ? console.error(err) : console.log('Commit logged!')
//            inquirer.prompt(managerQuestions)
//            .then((responsesM) => {
//                fs.appendFile('newHTML.html', `<!DOCTYPE html>
//                <html lang="en">
//                <head>
//                    <meta charset="UTF-8">
//                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
//                    <title>Team Cards</title>
//                </head>
//                <body>
//                    <div class="card" style="width: 18rem;">
//                        <div class="card-body">
//                          <h5 class="card-title">${responses.role}</h5>
//                          <h6 class="card-subtitle mb-2 text-muted">${responses.name}</h6>
//                          <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.id}</h6>
//                          <h6 class="card-subtitle mb-2 text-muted">Office number: ${responsesM.office}</h6>
//                          <a href="#" class="card-link">${responses.email}</a>
//                          <a href="#" class="card-link">Another link</a>
//                        </div>
//                      </div>

//                </body>
//                </html>` ), (err) =>
//                err ? console.error(err) : console.log('Commit logged!')


//            })

//         } else if(responses.role[1]) {
//             inquirer.prompt(engineerQuestions)
//             .then(responsesE)

//         } else (responses.role[2]) 
//             inquirer.prompt(internQuestions)
//             .then(responsesI)


//     }});

