const express = require('express')
const app = express()
const port = process.env.Port || 3000
const mongoose = require('./db/mongoose')

app.use(express.json())
const userRouter = require('./routers/user')
app.use(userRouter)
app.listen(port, () => {
    console.log("server is running on port" + port)
})