const express = require('express');
const router = require('express').Router();


//Require all the routes that go from here:

const siteRouter = require('./site-routes');
const searchAddRouter = require('./search-add-routes');
const adminRouter = require('./admin-routes');


// Misc.: All routes that are not search-add or admin
router.use('/', siteRouter);

//routes for searching and adding to the database
router.use('/search-add', searchAddRouter);

// routes for admin access: login, update
router.use('/admin', adminRouter);

module.exports = router;
