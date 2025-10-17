const express = require('express')
var cors = require('cors')
PORT = 3100
const app = express()

app.use(cors())


const {productRouter} = require('./routes/products')


app.use('/', productRouter)

app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`)
})

