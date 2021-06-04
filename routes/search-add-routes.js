const express = require('express');

const router = express.Router();

const searchAddController = require('../controllers/search-add-controllers');

// router.route('/')
//     .get(searchAddController.name_of_function)

router.route('/add-a-provider')
    .get(searchAddController.add_a_provider)
    // .post(searchAddController.add_a_provider_client_input_post)
    // .post(searchAddController.add_a_provider_post_provider_input_post)

router.route('/find-a-therapist-search')
    .get(searchAddController.find_a_provider)

router.route('/results')
.get(searchAddController.results)

router.route('/thank-you')
.get(searchAddController.thank_you)

module.exports = router;