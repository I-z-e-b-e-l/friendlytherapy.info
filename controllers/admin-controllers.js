const { response } = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const Providers = require ('../models/provider-model')
const User = require ('../models/user-model')



module.exports = {

//display the register page
  register: (request, response) => {
    response.render('pages/register');
},

//process the registration data
//   register_post:(request, response) => {
//     console.log("the eagle has landed")
//     bcrypt.hash(request.body.password, saltRounds, function(error, hash) {
//       const newUser = new User({
//         username: request.body.username,
//         password: hash
//       });
//       newUser.save();
//       console.log(`The hash value being saved is: ${hash}`);
//       response.redirect('/admin/login');
//   });
// },

  register_post:(request, response) => {
    User.register({username: request.body.username}, request.body.password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/');
        });
      }
    });
  },

  login: (request, response) => {
      response.render('pages/login');
  },

  // login_post: (request, response) => {
  //     console.log("the eagle has landed on login-post")
  //     const username = request.body.username;
  //     const password = request.body.password;
  //     console.log(`password entered is: ${password}`);
  //     User.findOne({username: username}, (error, foundUser) => {
  //       if (error) {
  //         console.log(`The error at login is: ${error}`);
  //         response.redirect('/nope');  
  //       } else {
  //         if(foundUser) {
  //           //delete console logs later
  //           console.log(`Username was matched: ${foundUser.username}`);
  //           console.log(`Their password is: ${foundUser.password}`);

  //           bcrypt.compare(password, foundUser.password, function(error, result) {

  //           if (result === true) {
  //             console.log(`user ${foundUser.username} logged in`);
  //             response.redirect('/admin');              
  //           }
  //         }); 
  //         };
  //       };
  //    });
  //   },

  login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password
    });
  
    request.login(user, (error) => {
      if (error) {
        return error;
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/');
        });
      }
    });
  },


  logout:(request, response) => {
    request.logout();
    response.redirect('/login');
  },




    // admin: (request, response) => {
    //     response.render('pages/admin');
    // },


        
    admin: (request, response) => {
        Providers.find({}, (error, allProviders) => {
            if (error) {
                return error;
            } else {
                // console.log(allProviders)
                response.render("pages/admin", {providers: allProviders, user: request.user});
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

    update: (request, response) => {
      if (request.isAuthenticated()) {
        const { id } = request.params;
        Providers.findOne({_id: id}, (error, foundProvider) => {
            if (error) {
                return error;
            } else {
                response.render('pages/update', { Provider: foundProvider });
            }
        })
      } {
        response.redirect('/nope')
      } 
    },

    update_provider: (request, response) => {
      console.log("The eagle has landed");
      if (request.isAuthenticated()) {
        console.log("The eagle is authenticated");
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
    } else {
      response.redirect('/nope')
    }
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