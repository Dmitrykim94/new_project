const express = require('express');
const mongoose = require('mongoose');
const Reg = require('../models/reg');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.redirect('/entries');
});

router.get('/secret', (req, res) => {
  res.render('entries/secret', {name:req.session.name})
  console.log(req.session.name);

  
})

router.get('/logout', async (req,res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>');
  console.log(req.session);
  console.log('name is >>>>>>>>>>>>>');
  console.log(req.session.name);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>');
  
  await req.session.destroy();
  // console.log(req.session);
  res.redirect('/entries')
})

router.route('/register')
  .get((req, res) => {
    res.render('entries/reg')
  })
  .post(async (req, res) => {
    const logins = await Reg.find()
    for (let i = 0; i < logins.length; i++) {
      if (logins[i].username === req.body.username || logins[i].email === req.body.email) {
        return res.json({ error: 'account already exists' })
      }
      else
        req.session.name = req.body.username;
    }
    let newUser = new Reg({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    await newUser.save();
    res.send({ url: '/secret' })
  })



router.route('/login')
  .get((req, res) => {
    if (req.session.name)
      res.redirect('/secret')
    res.render('entries/login')
  })
  .post(async (req, res) => {
    
    // console.log(req.session);
    
    const arr = await Reg.find();
    for (let i = 0; i < arr.length; i++) {
      if (req.body.username === arr[i].username && req.body.password === arr[i].password) {
        req.session.name = req.body.username;
        res.json({ url: '/secret' })
      }
    }
    // console.log(req.session);
  })


module.exports = router;
