'use strict';

const mongoose = require('mongoose');

var db = undefined;

mongoose.Promise = global.Promise

exports.connect = function(url) {
    return new Promise((resolve, reject) => {
        mongoose.connect(url, {
            useNewUrlParser: true,
        })
            .then(() => resolve())
            .catch( e => reject(e));
    })
} 