require('dotenv').config()
const express = require('express')
var cors = require('cors')
PORT = 3100
const app = express()
const {client} = require('./src/config/databasepg')

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

const {productRouter} = require('./src/routes/products')
const {userRouter} = require('./src/routes/user')


app.use('/', productRouter)
app.use('/', userRouter)


try{
client.connect().then(console.log('Database is working'))
app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`)
})
}catch(err){
    console.log('this thing no dey work o')
}



