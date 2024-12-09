const isAuthenticated = (req, res, next) => {
    if(req.session.userId){
        next();
    }
    res.redirect('/login')

}

module.exports = {
    isAuthenticated
}