// need to piece together the html page
let renderHTML = [];

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
</header>`;

// complete card, might need to be broken up further

const htmlCard = `     <div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${responses.role}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${responses.name}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Id Number: ${responses.id}</h6>
  <h6 class="card-subtitle mb-2 text-muted">Office number: ${responses.office}${responses.school}</h6>
  <a href="#" class="card-link">${responses.email}</a>
  <a href="#" class="card-link">${responses.github}</a>
</div>
</div>`


const htmlFooter = `</body>`
