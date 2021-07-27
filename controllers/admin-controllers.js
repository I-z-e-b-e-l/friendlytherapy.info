const { response } = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const Providers = require ('../models/provider-model')
const User = require ('../models/user-model')

const passport = require('passport');

module.exports = {

  //display the register page
  register: (request, response) => {
    // response.render('pages/register')
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


    // admin_add_provider: (request, response) => {
      // response.render('pages/admin-add-provider');
      // response.redirect('admin/admin-add-provider');
    // },

    admin_add_provider: (request, response) => {
      if (request.isAuthenticated()){
        response.render('pages/admin-add-provider');
      } else {
        response.render('pages/nope');
      }
    },

    admin_add_provider_post: (request, response) => {
      let newProvider = new Providers ({
        added: request.body.date_added_admin_input,
        name: request.body.name_admin_input,
        practice: request.body.practice_admin_input,
        providerType: request.body.provider_type_admin_input,
        credentials: request.body.credentials_admin_input,
        teletherapy: request.body.teletherapy_admin_input,
        licenseState: request.body.license_state_admin_input,
        location: request.body.location_admin_input,
        queerRating: request.body.queer_rating_admin_input,
        transRating: request.body.trans_rating_admin_input,
        polyRating: request.body.poly_rating_admin_input,
        kinkRating: request.body.kink_rating_admin_input,
        swRating: request.body.sw_rating_admin_input,
        bipocRating: request.body.bipoc_rating_admin_input,
        adhdRating: request.body.adhd_rating_admin_input,
        austismRating: request.body.autism_rating_admin_input,
        disabilityRating: request.body.disability_rating_admin_input,
        traumaRating: request.body.trauma_rating_admin_input,
        substanceUseRating: request.body.substance_use_rating_admin_input,
        additionalRating: request.body.additional_rating_admin_admin_input,
        commentsReCommunity: request.body.comments_community_admin_input,
        whoAddedInfo: request.body.who_added_info_check_client,
        website: request.body.website_admin_input,
        contact: request.body.contact_admin_input,
        acceptInsurance: request.body.insurance_yn_admin_input,
        insuranceFromClient: request.body.additional_insurance_admin_input,
        acceptMassHealth: request.body.masshealth_admin_input,
        accessibility: request.body.access_admin_input,
        couplesTherapy: request.body.couples_admin_input,
        youthTherapy: request.body.youth_admin_input,
        comments: request.body.comments_admin_input,
        cost: request.body.cost_admin_input,
        pronouns: request.body.pronouns_admin_input,
        address: request.body.address_admin_input,      
        acceptingClients: request.body.accpting_clients_admin_input,
        commentsAdmin: request.body.admin_comments_admin_input, 
        lastUpdate: request.body.last_update_admin_input
    });
    newProvider.save();
    response.redirect('/admin');
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
    console.log("The eagle has landed in update_provider");
    if (request.isAuthenticated()) {
      console.log("The eagle is authenticated");
    const {id} = request.params;

    Providers.findByIdAndUpdate(id, {$set: {  
      name: request.body.name_update,
      pronouns: request.body.pronouns_update,
      practice: request.body.practice_update,
      providerType: request.body.provider_type_update,
      credentials: request.body.credentials_update,
      teletherapy: request.body.teletherapy_update,
      licenseState: request.body.license_state_update,
      location: request.body.location_update,
      address: request.body.address_update,
      couplesTherapy: request.body.couples_update,
      youthTherapy: request.body.youth_update,
      website: request.body.website_update,
      contact: request.body.contact_update,
      acceptInsurance: request.body.insurance_yn_update,
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
          console.log("should return an error")
            return error;
        } else {
            console.log("hits else, should redirect to admin")
            response.redirect('/admin');
        }
    })
  } else {
    console.log("hits else, should redirect to nope")
    response.redirect('/admin/nope')
  }
},

    // update_provider: (request, response) => {
    //   console.log("The eagle has landed");
    //   if (request.isAuthenticated()) {
    //     console.log("The eagle is authenticated");
    //   const {id} = request.params;


  //     Providers.findByIdAndUpdate(id, {$set: {  
  //       name: request.body.name_update,
  //       pronouns: request.body.pronouns_update,
  //       practice: request.body.practice_update,
  //       providerType: request.body.provider_type_update,
  //       credentials: request.body.credentials_update,
  //       teletherapy: request.body.teletherapy_update,
  //       licenseState: request.body.license_state_update,
  //       location: request.body.location_update,
  //       couplesTherapy: request.body.couples_update,
  //       youthTherapy: request.body.youth_update,
  //       website: request.body.website_update,
  //       contact: request.body.contact_update,
  //       acceptInsurance: request.body.insurance_yn_update,
  //       //skip insurancefromclient
  //       whichInsurance: request.body.which_insurance_update,
  //       additionalInsurance: request.body.additional_insurance_update,
  //       acceptMassHealth: request.body.masshealth_yn_update,
  //       cost: request.body.cost_update,
  //       accessibility: request.body.access_update,
  //       comments: request.body.comments_update,
  //       commentsAdmin: request.body.admin_comments_update,
  //       lastUpdate: request.body.last_update,
  //     }}, {new: true}, (error) => {
  //         if (error) {
  //             return error;
  //         } else {
  //             response.redirect('/admin');
  //         }
  //     })
  //   } else {
  //     response.redirect('/admin/nope')
  //   }
  // },


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