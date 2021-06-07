require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
// next stop: index routes
const routes = require('./routes/index-routes');

const nodemailer = require('nodemailer');
const multiparty = require("multiparty");
const { response } = require('express');

const app = express();
const PORT = process.env. PORT || 3000;

app.set('view engine', 'ejs');

//contact form email code
const transporter = nodemailer.createTransport({
  // host: "stmp.gmail.com",
  // port: 587,
  host: "stmp.mail.yahoo.com",
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log ("connection configuration to send email is not verified. check out this error message:")
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

//email contact - does this go here?
app.post("/send", (request, response) => {

  let contactForm = new multiparty.Form();
  let data = {};
  contactForm.parse(request, function (error, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    const mail = {
      from: data.contact_form_name,
      to: process.env.EMAIL,
      subject: "Update for friendlytherapy.info",
      text: `${data.contact_form_name} <${data.contact_form_email}> \n${data.contact_form_message}`,
    };

    transporter.sendMail(mail, (error, data) => {
      if (error) {
        console.log(error);
        response.status(500).send("Something went wrong.");
      } else {
        response.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});




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

