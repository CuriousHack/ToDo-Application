const UserModel = require('../models/UserModel')
const Signup = async ({username, email, password}) => {
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
            message: 'unable to create account'
        }
    }
}

const Login = async (email, password) => {
    try{
        const user = await UserModel.findOne({email})

        if(!user){
            return{
                code: 401,
                success: false,
                message: 'Invalid Credentials'
            }
        }
        const isValid = await user.isValidPassword(password)
        if(!isValid){
            return{
                code: 401,
                success: false,
                message: 'Invalid Credentials'
            }
        }
        return {
            code: 200,
            success: true,
            data: {
                user: user
            },
            message: 'Login Successful!'
        }
    }
    catch(err){
        return {
            code: 500,
            success: false,
            message: 'unable to login'
        }

    }
}

module.exports = { Signup, Login }