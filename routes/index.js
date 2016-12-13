var express = require('express');
var router = express.Router();
const knex = require('../knexconnect');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: Steven});


  })



  //res.render('index', { title: 'Express' });


module.exports = router;
