const AuthService = require('../services/UserServices')
const createUser = async (req, res) => {
    const payload = req.body

    const SignupResponse = await AuthService.Signup({
        username: payload.username,
        email: payload.email,
        password: payload.password
    })

    if(!SignupResponse.success){
        res.status(SignupResponse.code).render('/register')
    }
    const { user } = SignupResponse.data
    res.status(SignupResponse.code).render('welcome', {user: user, message: SignupResponse.message})
}

const LoginUser = async (req, res) => {
    const {email, password} = req.body

    const LoginResponse = await AuthService.Login(email, password)
    if(!LoginResponse.success){
        res.status(LoginResponse.code).render('login', { message: LoginResponse.message })
    }else{

    console.log(LoginResponse)
    const { user } = LoginResponse.data
    req.session.userId = user._id;
    res.render('welcome', {user: user, message: LoginResponse.message})
    }

}

module.exports = { createUser, LoginUser }