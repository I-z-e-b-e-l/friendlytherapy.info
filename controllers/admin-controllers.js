const { response } = require('express');

const Providers = require ('../models/provider-model')

module.exports = {

//display the register page
  register: (request, response) => {
    response.render('pages/register');
},

//process the registration data
  register_post:(request, response) => {
    bcrypt.hash(request.body.password, saltRounds, function(error, hash) {
      const newUser = new User({
        username: request.body.username,
        password: hash
      });
      newUser.save();
      console.log(`The hash value being saved is: ${hash}`);
      response.redirect('/login');
  });
},



//display the login page
    login: (request, response) => {
      response.render('pages/login');
  },

//execute logging in
  login_post: (request, response) => {
      const username = request.body.username;
      const password = request.body.password;
      console.log(`password entered is: ${password}`);
      User.findOne({username: username}, (error, foundUser) => {
        if (error) {
          console.log(`The error at login is: ${error}`);
          response.redirect('/nope');  
        } else {
          if(foundUser) {
            console.log(`Username was matched: ${foundUser.username}`);
            console.log(`Their password is: ${foundUser.password}`);

            bcrypt.compare(password, foundUser.password, function(error, result) {
            // result == true
            if (result === true) {
              console.log(`user ${foundUser.username} logged in`);
              response.redirect('/admin');              
            }
          }); 
          };
        };
     });
    },





    // admin: (request, response) => {
    //     response.render('pages/admin');
    // },

    admin: (request, response) => {
        Providers.find({}, (error, allProviders) => {
            if (error) {
                return error;
            } else {
                console.log(allProviders)
                response.render("pages/admin", {providers: allProviders});
            }
        })
    },



    //admin access to update a listing
    update: (request, response) => {
        response.render('pages/update');
        },

    // update: (request, response) => {
    //     const { id } = request.params;
    //     Providers.findOne({_id: id}, (error, foundProvider) => {
    //         if (error) {
    //             return error;
    //         } else {
    //             response.render('pages/update', { Provider: foundProvider });
    //         }
    //     })
    // },

    nope: (request, response) => {
      response.render('pages/nope');
  }

}