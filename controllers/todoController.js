const todoModel = require('../models/TodoModel')
const createTodo = async (req, res) => {
    const { title } = req.body
    try{
        await todoModel.create({
            user_id: req.session.user.id,
            title: title
        })
        res.redirect('/dashboard')
    }
    catch(err) {
        console.log(err)
    }
}

const getTodo = async (req, res) => {
    try{
        const todos = await todoModel.find({ user_id: req.session.user.id }).sort({ created_at: -1}) 
        return todos
    }
    catch(err){
        res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'error fetching todo'})
    }
}

const updateTodo = async(req, res) => {

    const todoId = req.params.id;
    const { action } = req.body
    try{
         await todoModel.findByIdAndUpdate(todoId, {status:action, updated_at: Date.now()})
        res.redirect('/dashboard')
    }
    catch(err){
        res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'error fetching todo'})
    }
}

const deleteTodo = async (req, res) => {
    todoId = req.params.id
    try{
        await todoModel.findByIdAndDelete(todoId)
        res.redirect('/dashboard')
    }
    catch(err){
        res.status(500).render('dashboard', {user: req.session.user, todos: [], message: 'unable to delete todo'})


    }

}

module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}

