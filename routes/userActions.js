const express = require('express');
const bcrypt = require('bcryptjs')
const fs = require('fs')
const router = express.Router();

let timestamp = Date.now().toLocaleString();

router.get('/user/register', (req,res)=> {
    res.render('register');
    console.log(`A user has arrived using the ${req.protocol} protocol...@${timestamp}`)
   
});

router.get('/user/login', (req,res)=> {
    res.render('login');
    console.log(`A user has arrived using the ${req.protocol} protocol...@${timestamp}`)
   
});

router.get('/user/dashboard', (req,res)=> {
    res.render('dashboard', {user:'hotnutty'});
    console.log(`A user has arrived using the ${req.protocol} protocol...@${timestamp}`)
   
});



router.post('/user/register', (req,res)=> {
    //checking the req.body elements
    const body = (`USERNAME:${req.body.user_name}/EMAIL: ${req.body.email}/PASSWORD:${req.body.password}`);
    res.render('register');
    /*setting up the salt and hashing method.
    Always hash a user password to avoid malicious 
    attacks and so forth.*/
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(`User password is now hashed :^^^^${hashedPassword}`)
    console.log(`${body}:\n${timestamp}`);
    

    });

router.post('/user/login', (req,res)=> {
    const body = (`USERNAME:${req.body.user_name}/EMAIL: ${req.body.email}/PASSWORD:${req.body.password}`);
    res.render('login');
    let timestamp = Date.now();
    console.log(`${body}`);

});


module.exports = router;