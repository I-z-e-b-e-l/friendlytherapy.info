require('dotenv').config()

const express = require('express');
const app=express();
const morgan = require('morgan');
// const transporter = nodemailer.createTransport(transport[, defaults]);
// const nodemailer = require('nodemailer');

const methodOverride = require('method-override');

require('./config/connection');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// next stop: index routes
const routes = require('./routes/index-routes');
app.use("/", routes);




const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});