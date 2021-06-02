const { response } = require('express');

const Providers = require ('../models/provider-model')

module.exports = {


    //update to take in database info
    admin: (request, response) => {
        response.render('pages/admin');
    },
    
    login: (request, response) => {
        response.render('pages/login');
    },

    //admin access to update a listing
    update: (request, response) => {
        response.render('pages/update');
        }

    // update: (request, response) => {
    //     const { id } = request.params;
    //     Providers.findOne({_id: id}, (error, foundProvider) => {
    //         if (error) {
    //             return error;
    //         } else {
    //             response.render('pages/update', { Provider: foundProvider });
    //         }
    //     })
    // }

}