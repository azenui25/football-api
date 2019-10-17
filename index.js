const express = require('express')
const bodyParser = require ('body-parser')

const teamRouter = require('./team/router')

const app = express()
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)




const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server is listening on ${port}`))
