const express = require('express');
const dotenv = require('dotenv')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const LoginRoute = require('./routes/LoginRoute')
const RegisterRoute = require('./routes/RegisterRoute')
const dashboardRoute = require('./routes/DashboardRoute')
const todoRoute = require('./routes/todoRoute')
const { isAuthenticated } = require('./middlewares/authMiddleware')
const dbConnection = require('./utils/db')
dotenv.config()

const app = express();
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL
const connectionUrl = process.env.connectionUrl
const sessionSecret = process.env.SESSION_SECRET


app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.json())

dbConnection()
app.use(
    session({
        secret: sessionSecret, // Replace with a strong secret
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: connectionUrl }),
        cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1-day session expiry
    })
);

app.get('/', (req, res) => {
    res.status(200).send('Successful');
})


app.use('/login', LoginRoute)
app.use('/register', RegisterRoute)
app.use('/dashboard', isAuthenticated, dashboardRoute)
app.use('/todo', isAuthenticated, todoRoute)
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/login');
    });
});



app.listen(PORT, () => {
    console.log(`server is listening on ${APP_URL}:${PORT}`)
})

