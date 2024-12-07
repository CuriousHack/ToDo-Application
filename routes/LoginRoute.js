const express = require('express')

const LoginRoute = express.Router()

LoginRoute.get('/', (req, res) => {
    //set whatto do when login route is hit
    // console.log('get method hits');
    res.render('login');
    // res.status(200).send('login page fetched')
})

LoginRoute.post('/', () => {
    //set what to do when post method hit login route
    console.log('post method hits')
})

module.exports = LoginRoute