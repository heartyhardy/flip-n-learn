const express = require('express')

const app = express()

app.get('/', (req,res, next) => {
    res.send("Server started!")
})

app.listen(5000)