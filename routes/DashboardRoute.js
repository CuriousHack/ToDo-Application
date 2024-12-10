const express = require('express')

const dashboardRoute = express.Router()

dashboardRoute.get('/', (req, res) => {
    res.render('dashboard', {user: req.session.user});
})

module.exports = dashboardRoute