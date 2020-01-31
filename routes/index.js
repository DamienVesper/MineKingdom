var express = require('express');
var router = express.Router();

/* GET pages. */
router.get(`/`, (req, res, next) => res.render(`index`, { title: `Home` }));
router.get(`/about`, (req, res, next) => res.render(`about`, { title: `About` }));
router.get(`/commands`, (req, res, next) => res.render(`commands`, { title: `Commands` }));
router.get(`/team`, (req, res, next) => res.render(`team`, { title: `Meet the Team` }));
router.get(`/contact`, (req, res, next) => res.render(`contact`, { title: `Contact` }));

module.exports = router;