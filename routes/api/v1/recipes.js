
const router = require('express').Router()
const { response } = require('express')
const { request } = require('http')
const path = require('path')
const root = path.join(__dirname, '..', '..', 'public')

router.get('/', (_, response) => response.sendFile('index.htm', { root }))

//require recipes
const recipes = require('../../../data/recipes.json')

//add a recipe to the list; return the new recipe
router.post('recipes/add', async (request, response) =>{
    const newMeal = request.body
    const newId = recipes.length + 1
    const newRecipe = {"id" : newId, "title" : newMeal.title, "image" : newMeal.image, "ingredients" : newMeal.ingredients, "instructions" : newMeal.instructions, "prepTime" : newMeal.prepTime, "difficulty" : newMeal.difficulty}
    recipes.push(newRecipe)

    response.send(recipes[newId-1])
})

//return all the data for specified recipe
router.get('recipes/:id', async (request, response) =>{
    const id = request.params.id.toString()
    response.send(recipes[id-1])
})

//return the id, title, image, prepTime, and difficulty of all recipes
router.get('/', async (_, response) =>{
    response.send(
        recipes.map(
            recipes.forEach(
                recipe, ()=>{
        return {"id" : recipe.id, "title" : recipe.title, "image" : recipe.image, "prepTime" : recipe.prepTime, "difficulty" : recipe.difficulty}
    })))
})

module.exports = router