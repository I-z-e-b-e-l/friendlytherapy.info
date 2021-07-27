const nodemailer = require('nodemailer');
const multiparty = require("multiparty");
const { response } = require('express');

const ResourceSuggestions = require ('../models/resource-suggestion-model');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
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

module.exports = {

    index: (request, response) => {
        response.render('pages/index');
    },

    about: (request, response) => {
        response.render('pages/about');
    },

    contact: (request, response) => {
        response.render('pages/contact');
    },

    //send an email via the form on contact page
    contact_post: (request, response) => {

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
                console.log("hits the if statement")
              console.log(error);
            //   response.status(500).send("Something went wrong.");
            } else {
                console.log("hits the else statement in the contact controller function!");
                response.redirect('/thank-you-contact')
                // response.status(200).send("Email successfully sent to recipient!");
            }
          });
        });
        
        

    },

    thank_you_contact: (request, response) => {
        response.render('pages/thank-you-contact')
    },

    how_to: (request, response) => {
        response.render('pages/how-to');
    },

    resources: (request, response) => {
        response.render('pages/resources');
    },

    

    // send an email via the form on resources page
    resource_suggest_post: (request, response) => {


        // let newResourceSuggestion = new ResourceSuggestions ({
        //     resourceName: request.body.resource_name,
        //     resourceLink: request.body.resource_link,
        //     resourceInfo: request.body.resource_info,
        //     resourceKnow: request.body.resource_know,
        // });
        // newResourceSuggestion.save();

 
        let resourceForm = new multiparty.Form();
        let data = {};
        resourceForm.parse(request, function (error, fields) {
          console.log(fields);
          Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
          });
      
          let mail = {
            // from: data.contact_form_name,
            from: "Friendly Therapy Community",
            to: process.env.EMAIL,
            subject: "Resource suggestion for friendlytherapy.info",
            text: `${data.resource_name} \n${data.resource_link} \n${data.resource_info} \n${data.resource_know}`,
          };
      
          transporter.sendMail(mail, (error, data) => {
            if (error) {
                console.log("hits the if statement");
              console.log(error);
            //   response.status(500).send("Something went wrong.");
            } else {
                console.log("hits the else statement for resource send email!");
                response.redirect('/thank-you-resource')
                // response.status(200).send("Email successfully sent to recipient!");
            }
          });
          // response.render('pages/thank-you-resource'); 
        });
        console.log("hits the end of nodemail")
 
 
 
 
    },

    thank_you_resource: (request, response) => {
      response.render('pages/thank-you-resource')
    }




}




