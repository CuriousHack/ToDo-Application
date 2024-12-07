const express = require('express')

const RegisterRoute = express.Router()

RegisterRoute.get('/', (req, res) => {
    //set whatto do when login route is hit
    res.render('register')
})

RegisterRoute.post('/', () => {
    //set what to do when post method hit login route
    console.log('post method hits')
})

module.exports = RegisterRoute