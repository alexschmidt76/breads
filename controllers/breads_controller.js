const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('Index', {
                breads: foundBreads,
                title: 'Index Page'
            });
        });
});

// NEW
breads.get('/new', (req, res) => {
    res.render('New');
});

// EDIT
breads.get('/:arrayIndex/edit', (req, res) => {
    res.render('Edit', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex
    });
});

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('Show', {
                bread: foundBread
            });
        })
        .catch( err => res.status(404).render('Error404'));
});

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined;
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true';
    } else {
        req.body.hasGluten = 'false';
    }
    Bread.create(req.body);
    res.redirect('/breads');
});

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten == 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread[req.params.arrayIndex] = req.body;
    res.redirect(`/breads/${req.params.arrayIndex}`);
});

// DELETE
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1);
    res.status(303).redirect('/breads');
});

module.exports = breads;