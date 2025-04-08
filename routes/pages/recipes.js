//This is a static page, it says 'see htm document'.

const router = require('express').Router()
const { response } = require('express')
const { request } = require('http')
const path = require('path')
const root = path.join(__dirname, '..', '..', 'public')

router.post('/recipe/add', (_, response) => response.sendFile('index.htm', { root }))

router.get('/recipe/:id', (_, response) => response.sendFile('index.htm', { root }))

router.get('/', (_, response) => response.sendFile('index.htm', { root }))

module.exports = router