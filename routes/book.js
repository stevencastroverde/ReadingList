var express = require('express');
var router = express.Router();
const knex = require('../knexconnect')

/* GET users listing. */
router.get('/books', function(req, res, next) {
  res.json(knex('book'));
});

module.exports = router;
