const express = require('express');
const router = require('express').Router();
const cors = require('cors');
const { Category } = require('../../models');


router.use(cors()); 

// Middleware to parse JSON data from the request body
router.use(express.json());

// Get all categories
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'name', 'description'], // Adjust the attributes you want to retrieve
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get a single category by ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'name', 'description'], // Adjust the attributes you want to retrieve
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new category
router.post('/', (req, res) => {
  //Expects JSON data in the request body
  const categoryData = req.body;

  Category.create({
    name: req.body.name, // Assuming you send the category name in the request body
    description: req.body.description, // Assuming you send the category description in the request body
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a category by ID
router.put('/:id', (req, res) => {
  // Validate and Update category body here
  const updatedCategoryData = req.body;
  // Validate and update the category here
  Category.update(updatedCategoryData, {
    where: {
      id: req.params.id,
    },
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json({ message: 'Category updated successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a category by ID
router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json({ message: 'Category deleted successfully' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router;