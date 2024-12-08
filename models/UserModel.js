const mongoose = require('mongoose')
const shortid = require('shortid')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

// run this function before creating the user account
UserSchema.pre(
    'save',
    async function (next) {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel