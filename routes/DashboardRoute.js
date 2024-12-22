const express = require('express')
const todoModel = require('../models/TodoModel')
const { getTodo } = require('../controllers/todoController')
const { dashboardController } = require('../controllers/dashboardController')

const dashboardRoute = express.Router()

// const completedCount = await todoModel.countDocuments({ user_id: req.session.user.id, state: 'completed' });
//     const pendingCount = await todoModel.countDocuments({ user_id: req.session.user.id, state: 'pending' });
//     const totalRelevantTodos = completedCount + pendingCount;

//     const completedPercentage = totalRelevantTodos > 0 
//         ? (completedCount / totalRelevantTodos) * 100 
//         : 0;

dashboardRoute.get('/', dashboardController)
    // try{
    //     const todos = await todoModel.find({ user_id: req.session.user.id})
    //     res.render('dashboard', {user: req.session.user, todos})
    // }
    // catch(err){
    //     res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'error fetching todo'})
    // }
    // res.render('dashboard', {user: req.session.user});
// })

module.exports = dashboardRoute