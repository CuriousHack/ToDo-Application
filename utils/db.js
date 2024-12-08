const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectionUrl = process.env.connectionUrl

const dbConnection = () => {
    mongoose.connect(connectionUrl)
    
    mongoose.connection.on('connected', () => {
        console.log('mongo db connection successful')
    })

    mongoose.connection.on('error', (err) => {
        console.log(`error: ${err}`)
    })
}

module.exports = dbConnection