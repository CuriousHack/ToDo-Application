const todoRoute = require('express').Router()
const todoModel = require('../models/TodoModel')
const { createTodo, updateTodo, deleteTodo } = require('../controllers/todoController')

todoRoute.post('/', createTodo)
todoRoute.put('/update/:id', updateTodo)
todoRoute.delete('/delete/:id', deleteTodo)

module.exports = todoRoute