const express = require('express');
const dotenv = require('dotenv')
const LoginRoute = require('./routes/LoginRoute')
const RegisterRoute = require('./routes/RegisterRoute')
const dbConnection = require('./utils/db')
dotenv.config()

const app = express();
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL


app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dbConnection()

app.get('/', (req, res) => {
    res.status(200).send('Successful');
})


app.use('/login', LoginRoute)
app.use('/register', RegisterRoute)



app.listen(PORT, () => {
    console.log(`server is listening on ${APP_URL}:${PORT}`)
})

