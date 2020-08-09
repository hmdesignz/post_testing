const express = require('express');
const os = require('os');
const morgan = require('morgan');
const registerRouter = require('../routes/userActions');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));
server.use(express.urlencoded({ extended: false}));
server.use(express.static('public'))


server.use('/', registerRouter);


server.set('view engine', 'ejs');


server.get('/', (req,res)=> {
    res.render('index');
    let timestamp = Date.now();
    console.log(`User arrived at ${timestamp} on ${req.protocol} with a ${os.platform()} OS`);
    
});






module.exports = server;