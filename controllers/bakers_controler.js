// dependencies
const express = require('express');
const baker = express.Router();
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');

// GET /bakers
baker.get('/', (req, res) => {
	Baker.find()
		.populate('breads')
		.then( foundBakers => res.send(foundBakers) );
});

// GET /bakers/:id
baker.get('/:id', (req, res) => {
	Baker.findById(req.params.id)
		.populate('breads')
		.then( foundBaker => res.render('bakerShow', {baker: foundBaker}) )
		.catch( err => res.status(404).render('Error404') );
});

// GET /bakers/data/seed
baker.get('/data/seed', (req, res) => {
	Baker.insertMany(bakerSeedData)
		.then(res.redirect('/breads'));
});

// delete/:id
baker.delete('/:id', (req, res) => {
	Baker.findByIdAndDelete(req.params.id)
		.then( deletedBaker => res.status(303).redirect('/breads') );
});

// export
module.exports = baker;