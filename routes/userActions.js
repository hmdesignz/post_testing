const express = require('express');
const router = express.Router();

let timestamp = Date.now();

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
    res.render('register');
    let timestamp = Date.now();
    console.log(`${req.body.user_name} ${req.body.email} ${req.body.password}`);

});

router.post('/user/login', (req,res)=> {
    res.render('login');
    let timestamp = Date.now();
    console.log(`${req.body.user_name} ${req.body.email} ${req.body.password}`);

});

module.exports = router;