const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/RecipeController');

// Route to display all recipes for a specific country
router.get('/:countryId/recipes', recipeController.getAllRecipes);

// Route to add a new recipe
router.post('/create', recipeController.addRecipe);

// Route to delete a recipe
router.delete('/:recipeId', recipeController.deleteRecipe);

module.exports = router;