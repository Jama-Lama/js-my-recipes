//this is an api page, it responses with data
const router = require('express').Router()

router.use = require('express').json()

const { response } = require('express')
const { request } = require('http')

//require recipes
const recipes = require('../../../data/recipes.json')

//add a recipe to the list; return the new recipe
router.post('/recipe/add', async (request, response) =>{
    const newMeal = request.body
    const newId = recipes.length + 1
    const newRecipe = {"id" : newId, "title" : newMeal.title, "image" : newMeal.image, "ingredients" : newMeal.ingredients, "instructions" : newMeal.instructions, "prepTime" : newMeal.prepTime, "difficulty" : newMeal.difficulty}
    recipes.push(newRecipe)

    response.send(recipes[newId-1])
})

//return all the data for specified recipe - use .find
router.get('/recipe/:id', async (request, response) =>{
    response.send(recipes.find((recipe)=>{
        return recipe.id.toString() == request.params.id
    }))
})

//return the id, title, image, prepTime, and difficulty of all recipes - !! in json format !!
router.get('/', async (_, response) =>{
    response.send(recipes.map((recipe)=>{
        return {id : recipe.id, title : recipe.title, image : recipe.image, prepTime : recipe.prepTime, difficulty : recipe.difficulty}
    }))
})

module.exports = router