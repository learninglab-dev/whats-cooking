var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "what's cooking" });
});

router.get('/menu', function(req, res, next) {
  // get appts from google cal?
  // get 
  res.render('menu', { title: "what's cooking" });
});


module.exports = router;
