const express = require('express');
const router = express.Router();
const toysService = require('../services/toys.service');

// Get all toys
router.get('/', (req, res) => {
  toysService.query().then((toys) => res.json(toys));
});

// Get single toy
router.get('/:id', (req, res) => {
  toysService.getById(req.params.id).then((toy) => res.json(toy));
});

// Delete toy
router.delete('/:id', (req, res) => {
  toysService.remove(req.params.id).then((toys) => res.json(toys));
});

// Create new toy
router.post('/', (req, res) => {
  toysService.save(req.body).then((savedToy) => res.json(savedToy));
});

// Update toy
router.put('/:id', (req, res) => {
  toysService.save(req.body).then((savedToy) => res.json(savedToy));
});

module.exports = router;
