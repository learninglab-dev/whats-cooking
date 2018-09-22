var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "what's cooking", date: moment().format("YYYYMMDD")});
});

router.get('/menu', function(req, res, next) {
  // get appts from google cal?
  // get
  res.render('menu', { title: "what's cooking" });
});

router.get('emoji-data', function(req, res, next){

})

module.exports = router;
