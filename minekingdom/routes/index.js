var express = require('express');
var router = express.Router();

/* GET pages. */
router.get(`/`, (req, res, next) => res.render(`index`, { title: `MineKingdom` }));
router.get(`/about`, (req, res, next) => res.render(`about`, { title: `About - MineKingdom` }));
router.get(`/docs`, (req, res, next) => res.render(`docs`, { title: `Documentation - MineKingdom` }));
router.get(`/team`, (req, res, next) => res.render(`team`, { title: `Meet the Team - MineKingdom` }));
router.get(`/contact`, (req, res, next) => res.render(`contact`, { title: `Contact - MineKingdom` }));

module.exports = router;