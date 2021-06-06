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

    nope: (request, response) => {
      response.render('pages/nope');
    },


    //admin access to update a listing
    // update: (request, response) => {
    //     response.render('pages/update');
    //     },

    update: (request, response) => {
        const { id } = request.params;
        Providers.findOne({_id: id}, (error, foundProvider) => {
            if (error) {
                return error;
            } else {
                response.render('pages/update', { Provider: foundProvider });
            }
        })
    },

    update_provider: (request, response) => {
      console.log("The eagle has landed");
      const {id} = request.params;

      Providers.findByIdAndUpdate({_id: id}, {$set: {
        name: request.body.name_update,
        pronouns: request.body.pronouns_update,
        practice: request.body.practice_update,
        providerType: request.body.provider_type_update,
        teletherapy: request.body.teletherapy_update,
        licenseState: request.body.license_state_update,
        location: request.body.location_update,
        couplesTherapy: request.body.couples_update,
        youthTherapy: request.body.youth_update,
        website: request.body.website_update,
        contact: request.body.contact_update,
        acceptInsurance: request.body.insurance_yn_update,
        whichInsurance: request.body.which_insurance_update,
        acceptMassHealth: request.body.masshealth_yn_update,
        cost: request.body.cost_update,
        accessibility: request.body.access_update,
        comments: request.body.comments_update,
        commentsAdmin: request.body.admin_comments_update
      }}, {new: true}, (error) => {
          if (error) {
              return error;
          } else {
              response.redirect('/admin');
          }
      })
  },


  delete_provider: (request, response) => {
    const {id} = request.params;
    Providers.deleteOne({_id: id}, (error) => {
        if (error) {
            return error;
        } else {
            response.redirect('/admin')
        }
    })
}















}