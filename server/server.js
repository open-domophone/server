#!/usr/bin/env node
'use strict'
 
const app = require('./config/app').app;
const db  = require('./config/db');

const user_route = require('./apps/user/urls');
const web_socket = require('./apps/ws/ws');

web_socket.start(app, '/ws');
app.use('/', user_route);

let port = 9090;
db.connect('mongodb://localhost/domophone')
    .then(() => {
        app.listen(port, () => {
            console.log('Server is up and running on port numner ' + port);
        });
    })
    .catch( e => console.log(e));


