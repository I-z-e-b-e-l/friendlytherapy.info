const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin-controllers');


router.route('/register')
    .get(adminController.register)
    .post(adminController.register_post)

//this is /admin page where all providers are listed by name
router.route('/')
    .get(adminController.admin)

router.route('/login')
    .get(adminController.login)
    .post(adminController.login_post)

router.route('/update')
    .get(adminController.update)

//pre-populate form by grabbing info on therapist from database
router.route('/update/:id')
    .get(adminController.update)




module.exports = router;
