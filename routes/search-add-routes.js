const express = require('express');

const router = express.Router();

const searchAddController = require('../controllers/search-add-controllers');

router.route('/add-a-provider')
    .get(searchAddController.add_a_provider)

router.route('/add-a-provider-client-input')
    .post(searchAddController.add_a_provider_client_input_post)

// router.post('/add-a-provider-client-input', searchAddController.add_a_provider_client_input_post)

router.route('/add-a-provider-provider-input')
    .post(searchAddController.add_a_provider_provider_input_post)

router.route('/thank-you')
.get(searchAddController.thank_you)

router.route('/find-a-therapist-search')
    .get(searchAddController.find_a_provider)
    // .post(searchAddController.search)

router.route('/results')
.get(searchAddController.results)



module.exports = router;