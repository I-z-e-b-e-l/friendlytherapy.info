const express = require('express');

const router = express.Router();

const siteController = require('../controllers/site-controllers');


router.route('/')
    .get(siteController.index)

router.route('/about')
    .get(siteController.about)

router.route('/contact')
.get(siteController.contact)
.post(siteController.contact_post)

router.route('/how-to')
.get(siteController.how_to)

router.route('/resources')
.get(siteController.resources)
.post(siteController.resource_suggest_post)

router.route('/thank-you-contact')
.get(siteController.thank_you_contact)




module.exports = router;