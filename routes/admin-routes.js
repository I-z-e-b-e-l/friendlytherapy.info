const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin-controllers');

// this is /admin page where all providers are listed by name
router.route('/')
    .get(adminController.admin)

// get the login page
router.route('/login')
    .get(adminController.login)

//get the update page
router.route('/update')
    .get(adminController.update)
//pre-populate form by grabbing info on therapist from database
// router.route('/update/:id')
//     .get(adminController.update)




module.exports = router;
