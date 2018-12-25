'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userShema = new Schema({
    password: String,
    email : {type : String, required: true, unique: true},
    //status: {type: boolean, default: false},
    created_at: Date,
    activation_at: Date,
    activation_link: String,
    activation_code: String,
});

var User = mongoose.model('User', userShema);

//module.exports = User;

exports.User = User;