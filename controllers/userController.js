const UserServices = require('../services/UserServices')
const createUser = async (req, res) => {
    const payload = req.body

    const UserResponse = await UserServices.createUser({
        username: payload.username,
        email: payload.email,
        password: payload.password
    })

    if(!UserResponse.success){
        res.status(UserResponse.code).render('/register')
    }
    const { user } = UserResponse.data
    res.status(UserResponse.code).render('welcome', {user: user, message: UserResponse.message})
}

module.exports = createUser