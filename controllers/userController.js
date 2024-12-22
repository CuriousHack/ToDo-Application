const AuthService = require('../services/UserServices')
const createUser = async (req, res) => {
    const payload = req.body

    const SignupResponse = await AuthService.Signup({
        username: payload.username,
        email: payload.email,
        password: payload.password
    }, {new: true})

    if(!SignupResponse.success){
        res.status(SignupResponse.code).render('/register')
    }
    const { user } = SignupResponse.data
    req.session.user = { id: user._id, username: user.username, email: user.email };
    res.status(SignupResponse.code).redirect('/dashboard')
}

const LoginUser = async (req, res) => {
    const {email, password} = req.body

    const LoginResponse = await AuthService.Login(email, password)
    if(!LoginResponse.success){
        return res.status(LoginResponse.code).render('login', { message: LoginResponse.message })
    }else{
        const { user } = LoginResponse.data
        req.session.user = { id: user._id, username: user.username, email: user.email };
        res.status(LoginResponse.code).redirect('/dashboard')
    }

}

module.exports = { createUser, LoginUser }