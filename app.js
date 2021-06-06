require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
// next stop: index routes
const routes = require('./routes/index-routes');

// const transporter = nodemailer.createTransport(transport[, defaults]);
// const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env. PORT || 3000;

app.set('view engine', 'ejs');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  }))
  
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});