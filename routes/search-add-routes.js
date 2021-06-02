const express = require('express');

const router = express.Router();

const searchAddController = require('../controllers/search-add-controllers');

// router.route('/')
//     .get(searchAddController.name_of_function)

router.route('/add-a-provider')
    .get(searchAddController.add_a_provider)

router.route('/find-a-therapist-search')
    .get(searchAddController.find_a_provider)



module.exports = router;