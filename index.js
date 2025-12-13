const PORT= 8080;

const path = require("path");
const express =require('express')
const shortid = require('shortid');
const { connectDB } = require('./connection');
const {setupmiddleware}=require("./middlewares/servermiddlewares");
const app=express();
const userRouter=require('./routes/route')
const staticRouter=require('./routes/staticroute')

//DATABASE CONNECTION
connectDB('mongodb://127.0.0.1:27017/shortid');  

//MiddleWares
setupmiddleware(app);

//routes
app.use('/',staticRouter)
// app.use('/',userRouter)
//
app.listen(PORT,()=>console.log(`SERVER STARTED AT PORT ${PORT} \n http://localhost:${PORT}`))


