const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
console.log('started entries');

router.get('/', async function (req, res) {
    // let entries = await Entry.mostRecent();
    let entries = await Entry.find()
    console.log(entries);
    res.render('index', { entries });
});

router.post('/', async function (req, res, next) {
    newEntry = new Entry({ title: req.body.title, body: req.body.body });
    res.redirect(`/main/${newEntry.id}`);
});

// new entries
router.get('/new', function (req, res, next) {
    res.render('new');
});

//detail entry
router.get('/:id', async function (req, res, next) {
    let entry = await Entry.findById(req.params.id);
    res.render('show', { entry });
});

router.put('/:id', async function (req, res, next) {
    let entry = await Entry.findById(req.params.id);
 
    entry.title = req.body.title;
    entry.body = req.body.body;
    await entry.save();

    res.redirect(`/main/${entry.id}`);

});

router.delete('/:id', async function (req, res, next) {
    await Entry.deleteOne({'_id': req.params.id});
    res.redirect('/');
});

router.get('/:id/edit', async function (req, res, next) {
    let entry = await Entry.findById(req.params.id);
    res.render('edit', { entry });
});
module.exports = router;


