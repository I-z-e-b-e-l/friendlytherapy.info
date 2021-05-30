const express = require('express');
const app=express();
const morgan = require('morgan');
// const transporter = nodemailer.createTransport(transport[, defaults]);
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const nodemailer = require('nodemailer');




const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// app.engine('handlebars', exphbs());
// app.set('view engine', handlebars);


app.get('/', (request, response) => {
    response.render('pages/index');
});

app.get('/about', (request, response) => {
    response.render('pages/about');
});

app.get('/add-a-provider', (request, response) => {
    response.render('pages/add-to-the-list');
});

app.get('/contact', (request, response) => {
    response.render('pages/contact');
});

app.get('/find-a-provider', (request, response) => {
    response.render('pages/find-a-therapist-search');
});

app.get('/how-to', (request, response) => {
    response.render('pages/how-to');
});

app.get('/login', (request, response) => {
    response.render('pages/login');
});

app.get('/resources', (request, response) => {
    response.render('pages/resources');
});

app.get('/update  ', (request, response) => {
    response.render('pages/update');
});





const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});