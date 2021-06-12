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
// send an email via the form on this page
// .post(siteController.resource_suggest_post)


module.exports = router;