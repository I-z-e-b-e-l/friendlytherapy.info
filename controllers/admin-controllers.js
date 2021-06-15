const { response } = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const Providers = require ('../models/provider-model')
const User = require ('../models/user-model')

const passport = require('passport');

module.exports = {

  //display the register page
  register: (request, response) => {
    if (request.isAuthenticated()){
      response.render('pages/register');
    } else {
      response.render('pages/nope');
    }
  },

  register_post:(request, response) => {
    User.register({username: request.body.username}, request.body.password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin/login');
        });
      }
    });
  },

  login: (request, response) => {
      response.render('pages/login');
  },

  login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password
    });
  
    request.login(user, (error) => {
      if (error) {
        // return error;
        console.log(error);
        // check this
        response.redirect('/admin/nope');
      } else {
        passport.authenticate('local')(request, response, () => {
          console.log("You are logged in");
          response.redirect('/admin');
        });
      }
    });
  },


  logout:(request, response) => {
    request.logout();
    console.log("you are logged out")
    response.redirect('/admin/login');
  },




    // admin: (request, response) => {
    //     response.render('pages/admin');
    // },


        
    admin: (request, response) => {
      if (request.isAuthenticated()) {
        Providers.find({}, (error, allProviders) => {
            if (error) {
                return error;
            } else {
                response.render("pages/admin", {providers: allProviders, user: request.user});
            }
        })
      } else {
        console.log("the request @ admin is not authenticated")
        response.redirect('/admin/login');
      }
    },

    nope: (request, response) => {
      response.render('pages/nope');
    },


    update: (request, response) => {
      if (request.isAuthenticated()){
              const { id } = request.params;
      Providers.findOne({_id: id}, (error, foundProvider) => {
          if (error) {
              return error;
          } else {
              response.render('pages/update', { Provider: foundProvider });
          }
      })
      } else {
        console.log("you are not authenticated @update");
        response.redirect('admin/nope')
      }

  },


    update_provider: (request, response) => {
      console.log("The eagle has landed");
      if (request.isAuthenticated()) {
        console.log("The eagle is authenticated");
      const {id} = request.params;

      // Providers.findByIdAndUpdate({_id: id}, {$set: {
      Providers.findByIdAndUpdate(id, {$set: {  
        name: request.body.name_update,
        pronouns: request.body.pronouns_update,
        practice: request.body.practice_update,
        providerType: request.body.provider_type_update,
        credentials: request.body.credentials_update,
        teletherapy: request.body.teletherapy_update,
        licenseState: request.body.license_state_update,
        location: request.body.location_update,
        couplesTherapy: request.body.couples_update,
        youthTherapy: request.body.youth_update,
        website: request.body.website_update,
        contact: request.body.contact_update,
        acceptInsurance: request.body.insurance_yn_update,
        //skip insurancefromclient
        whichInsurance: request.body.which_insurance_update,
        additionalInsurance: request.body.additional_insurance_update,
        acceptMassHealth: request.body.masshealth_yn_update,
        cost: request.body.cost_update,
        accessibility: request.body.access_update,
        comments: request.body.comments_update,
        commentsAdmin: request.body.admin_comments_update,
        lastUpdate: request.body.last_update,
      }}, {new: true}, (error) => {
          if (error) {
              return error;
          } else {
              response.redirect('/admin');
          }
      })
    } else {
      response.redirect('/admin/nope')
    }
  },


  delete_provider: (request, response) => {
    if (request.isAuthenticated()) {
    const {id} = request.params;
    Providers.deleteOne({_id: id}, (error) => {
        if (error) {
            return error;
        } else {
            response.redirect('/admin')
        }
    });
    } else {
    response.redirect('/admin/nope')
    }
  }
}