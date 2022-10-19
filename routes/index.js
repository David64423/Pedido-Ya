var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/loggin', function(req, res, next) {
  res.render('loggin');
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});

router.get('/terminos', function(req, res, next) {
  res.render('terms_of_service');
});

module.exports = router;
