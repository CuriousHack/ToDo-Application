const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT
const APP_URL = process.env.APP_URL

app.get('/', (req, res) => {
    res.status(200).send('Successful');
})

app.use('view engine', 'ejs')

app.use(express.static("public"))
app.listen(PORT, () => {
    console.log(`server is listening on ${APP_URL}:${PORT}`)
})

