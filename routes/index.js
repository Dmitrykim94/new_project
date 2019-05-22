const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index')
});

router.route('/register')
  .get((req, res) => {
    res.render('register')
  })
  .post(async (req, res) => {
    const allUsers = await User.find()
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].username === req.body.username || allUsers[i].email === req.body.email) {
        return res.json({ error: 'account already exists' })
      }
      else
        req.session.name = req.body.username;
    }
    let newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      tagArray: [{ tag: req.body.likes }]
    })
    await newUser.save();
    res.send({ url: '/main' })
  })

router.route('/login')
  .get((req, res) => {
    if (req.session.name)
      res.redirect('/main')
    res.render('login')
  })
  .post(async (req, res) => {
    const arr = await User.find();
    for (let i = 0; i < arr.length; i++) {
      if (req.body.username === arr[i].username && req.body.password === arr[i].password) {
        req.session.name = req.body.username;
        res.json({ url: '/main' })
      }
    }
  })

router.get('/logout', async (req, res) => {
  await req.session.destroy();
  res.redirect('/')
})


module.exports = router;
