const { getTodo } = require("../controllers/todoController");
const todoModel = require('../models/TodoModel')

const dashboardController = async (req, res) => {
    try{
        //percentage of completed against all active todos
        const completedCount = await todoModel.countDocuments({ user_id: req.session.user.id, status: 'completed' });
        const pendingCount = await todoModel.countDocuments({ user_id: req.session.user.id, status: 'pending' });
        const totalRelevantTodos = completedCount + pendingCount;
        let completedPercentage = totalRelevantTodos > 0 
        ? (completedCount / totalRelevantTodos) * 100 
        : 0;
        completedPercentage = Math.round(completedPercentage)

        const todos = await getTodo(req, res)
        res.render('dashboard', {user: req.session.user, todos, completedPercentage})

    }
    catch(err){
        res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'error fetching todo'})
    }
}

module.exports = {
    dashboardController
}
