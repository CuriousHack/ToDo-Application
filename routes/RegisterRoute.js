const express = require('express')
const createUser = require('../controllers/userController')

const RegisterRoute = express.Router()

RegisterRoute.get('/', (req, res) => {
    //set whatto do when login route is hit
    res.render('register')
})

RegisterRoute.post('/', createUser)

module.exports = RegisterRoute