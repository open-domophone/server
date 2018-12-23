var express = require('express');

var router = express.Router()


var userCtrl = require('./controllers');

router.route('/auth').get(userCtrl.auth);
//router.route('/movie').post(movieCtrl.postMovie);
//router.route('/movies').get(movieCtrl.getMovies);

module.exports = router; 