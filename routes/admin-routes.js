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

router.route('/logout')
    .get(adminController.logout)

// router.route('/update')
//     .get(adminController.update)

//pre-populate form by grabbing info on therapist from database
router.route('/update/:id')
    .get(adminController.update)
    .put(adminController.update_provider)
    .delete(adminController.delete_provider)

router.route('/nope')
    .get(adminController.nope)

















    router.route('/nope')
    .get(adminController.nope)


module.exports = router;
