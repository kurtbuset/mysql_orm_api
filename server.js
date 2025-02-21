require('rootpath')()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('_middleware/error-handler')

// middleware used
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

// api routes
app.use('/users', require('./users/users.controller'))

// global error handler
app.use(errorHandler)

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000

app.listen(port, _ => { console.log(`LISTENING ON PORT ${port}`)})  

