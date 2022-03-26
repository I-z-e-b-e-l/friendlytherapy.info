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

router.route('/admin-add-provider')
.get(adminController.admin_add_provider)
.post(adminController.admin_add_provider_post)

router.route('/update/:id')
    .get(adminController.update)
    .put(adminController.update_provider)
    .delete(adminController.delete_provider)
    // .post(adminController.update_provider)


// router.route('/update/:id')
//     .get(adminController.update)
    // .put(adminController.update_provider)
    // .post(adminController.update_provider)
    // .delete(adminController.delete_provider)

router.route('/nope')
    .get(adminController.nope)

















    router.route('/nope')
    .get(adminController.nope)


module.exports = router;
