const router = require('express').Router();
const { json } = require('sequelize');
const { category } = require('../../models');

// GET /api/category
router.get('/', (req, res) => {});

// GET /api/category/1
router.get('/:id', (req, res) => {});

// POST /api/category
router.post('/', (req, res) => {});

// PUT /api/category/1
router.put('/:id', (req, res) => {});

// DELETE /api/category/1
router.delete('/:id', (req, res) => {});

module.exports = router;