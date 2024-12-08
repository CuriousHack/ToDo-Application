const UserModel = require('../models/UserModel')
const createUser = async ({username, email, password}) => {
   const newUser = {
    username: username,
    email: email,
    password: password
   } 
    const createdUser = await UserModel.create(newUser)
    try{
        return {
            code: 201,
            success: true,
            data: {
                user: createdUser
            },
            message: 'Account created successfully!'
        }
    }
    catch(err) {
        console.log(`error: ${err}`)
        return {
            code: 500,
            success: false,
            data: null,
            message: 'unable to create account'
        }
    }
}

module.exports = createUser