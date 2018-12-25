const express = require('express');
const body_parser = require('body-parser');
//const helmet = require('helmet');

const app = express();

// app.use(helmet.csp({
//     defaultSrc: ["'self'"],
//     scriptSrc: ["'self'"],
//     styleSrc: ["'self'"],
//     imgSrc: ["'self'"],
//     connectSrc: ["'self'"],
//     fontSrc: ["'self'"],
//     objectSrc: ["'none'"],
//     mediaSrc: ["'self'"],
//     frameSrc: ["'none'"],
//     // reportUri: '/report-violation',
//     reportOnly: false, // set to true if you only want to report errors
//     setAllHeaders: false, // set to true if you want to set all headers
//     safari5: false // set to true if you want to force buggy CSP in Safari 5
// }));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

exports.app = app;