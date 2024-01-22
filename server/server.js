const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require('cors');
app.use(express.json());

app.use(
    cors( '*'
        
    //     {
    //   origin: ["http://localhost:5173"],
    //   methods: ["GET", "POST", "DELETE"],
    //   credentials: true,
    // }
    )
)


//database connection
dotenv.config({path: './.env'});

app.use((err, req, res, next) => {
    console.error(err); 
    if(err.status === 400)
      return res.status(err.status).send('Dude, you messed up the JSON');
  
    return next(err);
  });
app.use('/user',require('./Routers/userRouter'))
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
  
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
