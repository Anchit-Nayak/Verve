const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")


//database connection
dotenv.config({path: "./.env"});

const connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}
app.listen(process.env.port, ()=>{
    connectDB();
    console.log(`Server started on port ${process.env.port}`);
})
