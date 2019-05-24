const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const Post = require('../models/post')
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.route('/reg')
  .get((req, res) => {
    res.render('reg')
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
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      tagArray: [{ tag: false }]
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
      if (req.body.username === arr[i].name && req.body.password === arr[i].password) {
        req.session.name = req.body.username;
        console.log('Успешная авторизация');

        res.json({ url: '/main' })
      }
    }
    res.json({ error: 'Неправильно введены данные' })
  })

router.route('/main')
  .get(async (req, res) => {
    let posts = await Post.find()
    res.render('main', { posts, username: req.session.name })
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(req.session.name);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');

  })
  .post(async (req, res) => {
    let postName = req.body.postName
    let like = req.body.like
    let likeUpdated = ++like
    await Post.findOneAndUpdate(
      { name: postName },
      { $set: { likes: likeUpdated } },
      { new: true }
    );
    res.json({ likeUpdated })
  })


router.get('/logout', async (req, res) => {
  await req.session.destroy();
  res.redirect('/')
})

router.route('/filter')
  .get(async (req, res) => {
    let tagFilter = req.query.tag;
    const foundByTag = await Post.find({ tag: tagFilter })
    res.render('filtered', { foundByTag , username: req.session.name })
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(req.session.name);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  })
  .post(async (req, res) => {
    let postName = req.body.postName
    let like = req.body.like
    let likeUpdated = ++like
    await Post.findOneAndUpdate(
    { name: postName },
    { $set: { likes: likeUpdated } },
    { new: true }
  );
    res.json({ likeUpdated })
    })
  
  

module.exports = router;
