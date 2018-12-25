'use strict';

var models = require('./models');

// login function
exports.login = function(req, res) {
    models.User.find({}, function(err, users) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(users);
        }
    });
    // var user = new models.User ({
    //     password: 'test',
    //     email : 'test2@mail.ru',
    //     status: false
    // });

    // user.save((err) => {
    //     if (err) {
    //         console.log(err);
    //         //return next(err);
    //     }
    //     res.send('Hello world');
    // });


    // res.send('Hello world');
}