const { response } = require('express');

const Providers = require ('../models/provider-model');

module.exports = {

    add_a_provider: (request, response) => {
        response.render('pages/add-a-provider');
    },


    // this is the post for the client form
    add_a_provider_client_input_post: (request, response ) => {

        let newProvider = new Providers ({
            name: request.body.name_client_input,
            practice: request.body.practice_client_input,
            providerType: request.body.provider_type_client_input,
            teletherapy: request.body.teletherapy_client_input,
            licenseState: request.body.license_state_client_input,
            location: request.body.location_client_input,
            queerRating: request.body.queer_rating,
            transRating: request.body.trans_rating,
            polyRating: request.body.poly_rating,
            kinkRating: request.body.kink_rating,
            swRating: request.body.sw_rating,
            bipocRating: request.body.bipoc_rating,
            additionalRating: request.body.additional_rating_info,
            commentsReCommunity: request.body.comments_community_client_input,
            couplesTherapy: request.body.couples_client_input,
            youthTherapy: request.body.youth_client_input,
            website: request.body.website_client_input,
            contact: request.body.contact_client_input,
            acceptInsurance: request.body.insurance_yn_client_input,
            whichInsurance: request.body.which_insurance_client_input,
            acceptMassHealth: request.body.masshealth_client_input,
            cost: request.body.cost_client_input,
            accessibility: request.body.access_client_input,
            comments: request.body.comments_client_input,
        });
        newProvider.save();
        response.redirect('/search-add/thank-you');
    },



// this is the post for the provider form
    add_a_provider_provider_input_post: (request, response ) => {

        let newProvider = new Providers ({
            name: request.body.name_provider_input,
            pronouns: request.body.pronouns_provider_input,
            practice: request.body.practice_provider_input,
            providerType: request.body.provider_type_provider_input,
            teletherapy: request.body.teletherapy_provider_input,
            licenseState: request.body.license_state_provider_input,
            location: request.body.location_provider_input,
            couplesTherapy: request.body.couples_provider_input,
            youthTherapy: request.body.youth_provider_input,
            website: request.body.website_provider_input,
            contact: request.body.contact_provider_input,
            acceptInsurance: request.body.insurance_yn_provider_input,
            whichInsurance: request.body.which_insurance_provider_input,
            acceptMassHealth: request.body.masshealth_provider_input,
            cost: request.body.cost_provider_input,
            accessibility: request.body.access_provider_input,
            comments: request.body.comments_provider_input,
        });
        newProvider.save();
        response.redirect('/search-add/thank-you');
    },

    thank_you: (request, response) => {
    response.render('pages/thank-you');
    },


//SEARCH PAGE

    find_a_provider: (request, response) => {
        response.render('pages/find-a-therapist-search');
    },


        // request.body.provider_type_search,
        // request.body.provider_state_search,
        // request.body.queer_rating_search,
        // request.body.trans_rating_search,
        // request.body.poly_rating_search,
        // request.body.kink_rating_search,
        // request.body.sw_rating_search,
        // request.body.bipoc_rating_search,
        // request.body.teletherapy_search,
        // request.body.couples_seach,
        // request.body.youth_search,
        // request.body.accept_insurance_yes,
        // request.body.accept_masshealth_yes_search,
        // request.body.which_insurance_search,


    //post route to execute searching the database
    search: (request, response) => {

        // console.log(`result of request.body.provider_state_search is: ${request.body.provider_state_search}`)
        // console.log(`result of request.body.provider_type_search is: ${request.body.provider_type_search}`)
        // console.log(`result of request.body.teletherapy_search is: ${request.body.teletherapy_search}`)
        // console.log(`result of request.body.which_insurance_search is: ${request.body.which_insurance_search}`)
        // console.log(`result of request.body is: ${request.body}`)
        console.log(`This is the value of document.querySelector('.provider_type_search:checked').value: ${document.querySelector('.provider_type_search:checked').value}`)

        Providers.find({
            
            // providerType: "therapist",
            providerType: document.querySelector('.provider_type_search:checked').value
            // providerType: request.body.provider_type_search,
            // licenseState: "Rhode Island",
            // licenseState: request.body.provider_state_search,
            //set ratings to be < or = to number

            // queerRating: {$gte: request.body.queer_rating_search },
            // queerRating: request.body.queer_rating_search,
            // transRating: "",
            // polyRating: "",
            // kinkRating: "",
            // swRating: "",
            // bipocRating: "",
            // teletherapy: request.body.teletherapy_search,
            // couplesTherapy:"yes",
            // youthTherapy:"yes",
            // acceptInsurance:"",
            // whichInsurance: request.body.which_insurance_search,
            // acceptMassHealth: "",
        
        }, (error, resultProviders) => {
            if (error) {
                

                return error;
            } else {
                console.log(`second console.log result of request.body is: ${request.body}`)
                console.log(resultProviders)
                response.render("pages/results", {providers: resultProviders});
            }
        })      

    },


    results: (request, response) => {
        Providers.find({}, (error, allProviders) => {
            if (error) {
                return error;
            } else {
                console.log(allProviders)
                response.render("pages/results", {providers: allProviders});
            }
        })
    },






}