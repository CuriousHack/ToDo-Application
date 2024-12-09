const express = require('express')
const { LoginUser } = require('../controllers/userController')


const LoginRoute = express.Router()

LoginRoute.get('/', (req, res) => {
    res.render('login', {message: ''});
})

LoginRoute.post('/', LoginUser)

module.exports = LoginRoute