const express = require('express')
const todoModel = require('../models/TodoModel')

const dashboardRoute = express.Router()

dashboardRoute.get('/', async (req, res) => {
    try{
        const todos = await todoModel.find({ user_id: req.session.user.id})
        res.render('dashboard', {user: req.session.user, todos})
    }
    catch(err){
        res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'error fetching todo'})
    }
    // res.render('dashboard', {user: req.session.user});
})

module.exports = dashboardRoute