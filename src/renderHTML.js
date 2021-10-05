// need to piece together the html page
const fs = require('fs');
// let tempHTML = [];


// const htmlHeader = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
//     <link  rel="stylesheet" href="./style.css">
//     <title>Team Cards</title>
// </head>
// <body>
// <header class='masthead'>
//  <h1 class='masthead-heading'>The Team!</h1>
// </header>`;

// // complete card, might need to be broken up further

// const managerCard = (responses) => { return `     <div class="card" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title">${responses.getRole()}</h5>
//   <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Office number: ${responses.getOffice()}</h6>
//   <a href="#" class="card-link">${responses.getEmail()}</a>
  
// </div>
// </div>`}

// const engineerCard = (responses) => { return `     <div class="card" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title">${responses.getRole()}</h5>
//   <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Office number: ${responses.getOffice()}</h6>
//   <a href="#" class="card-link">${responses.getEmail()}</a>
//   <a href="#" class="card-link">${responses.getGithub()}</a>
// </div>
// </div>`}

// const internCard = (responses) => { return `     <div class="card" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title">${responses.getRole()}</h5>
//   <h6 class="card-subtitle mb-2 text-muted">${responses.getName()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.getId()}</h6>
//   <h6 class="card-subtitle mb-2 text-muted">School: ${responses.getSchool()}</h6>
//   <a href="#" class="card-link">${responses.getEmail()}</a>
  
// </div>
// </div>`}


// const htmlFooter = `</body>`

// renderHTML = () => {
//   tempHTML.push(htmlHeader);

//   tempArr.forEach(responses => {
    
  
//   switch (responses.getRole()) {
//     case "Manager":
//       tempHTML.push(managerCard(responses));
//       break;
//     case "Engineer":
//       tempHTML.push(engineerCard(responses));
//       break;
//     case "Intern":
//       tempHTML.push(internCard(responses));
//       break;
//     default:
//       break;
//   }});
//   tempHTML.push(htmlFooter);

//   tempHTML = tempHTML.join('')
  

//   fs.writeFile('index.html', tempHTML.toString(), (err) =>
//   err ? console.error(err) : console.log('Commit logged!'))
// }

module.exports = renderHTML