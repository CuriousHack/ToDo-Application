const express = require('express')
const { LoginUser } = require('../controllers/userController')


const LoginRoute = express.Router()

LoginRoute.get('/', (req, res) => {
    //redirect to dashboard if session is active
    if(req.session.user){
        return res.redirect('/dashboard')
    }else{
        res.render('login', {message: ''});
    }
})
LoginRoute.post('/', LoginUser)

module.exports = LoginRoute