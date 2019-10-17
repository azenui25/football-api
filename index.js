const express = require('express')

const router = require('./team/router')


const app = express()
app.use(router)



const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server is listening on ${port}`))
