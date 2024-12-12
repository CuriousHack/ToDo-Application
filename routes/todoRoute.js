const todoRoute = require('express').Router()
const todoModel = require('../models/TodoModel')

todoRoute.get('/',(req, res) => {
    console.log('todo getter')
})

todoRoute.post('/', async (req, res) => {
    const { title } = req.body
    console.log(req.session.user)
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

    // todo = todoModel.create({
    //     user_id: req.session.user._id,
    //     title: title
    // })
    // const createdUser = await UserModel.create(newUser)
})

module.exports = todoRoute