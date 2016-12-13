var express = require('express');
var router = express.Router();
const knex = require('../knexconnect');
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('book')
  .select('Title', 'Page_Count').then((books) => {
    res.render('listbook', books)
    // res.render('listbook', books );


  });



  //res.render('index', { title: 'Express' });
});

module.exports = router;
