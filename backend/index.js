const connectToMongo = require('./db');
const express=require("express");
connectToMongo();

const app=express();
const port=8000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world");  
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/order', require('./routes/order'))

app.listen(port,()=>{
    console.log(`Trendy Tone the application is started succesfully on ${port}`);
})