const mongoose = require('mongoose')
const shortid = require('shortid')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    user_id: {
        type: String,
        required: true,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'deleted'],
        default: 'pending'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const todoModel = mongoose.model('todo', todoSchema)

module.exports = todoModel