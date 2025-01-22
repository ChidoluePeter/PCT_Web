// Technology dependencies importation and initialization and keys storage
require("dotenv").config();
const port = 5000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.mongoString
const path = require('path');
// express server initialization

const app = express();
app.use(cors());
app.use(express.json())



// Serve Angular static files
app.use(express.static(path.join(__dirname, 'dist/pct/browser')));

// Fallback route for Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/pct/browser'));
});

// MongoDB server connection initialization 


mongoose.connect(mongoString,{usenewurlparser:true,useunifiedtopology:true})
        .then(()=>console.log("MongoDB Server connection established"))
        .catch(err=>console.log(err));

        
// MongoDB schematics and model creation 

const userSchema = new mongoose.Schema({
    email: { type: String, required: true , unique:true},
    phone: { type: String, required: true },
    password: { type: String, required: true }
});

// mongoDB task creation model 

const taskSchema = new mongoose.Schema({
    taskname:String,
    taskdetails:String
})

// MongoDB User model creation
const User = mongoose.model("User",userSchema);

// MongoDB task model creation 
const Task = mongoose.model( "Task",taskSchema);

// Server http post request handling for user sign up

app.post("/signup",async(req,res)=>{
    const {email,phone,password} = req.body;
    try{
        const newUser = new User({email,phone,password});
        await newUser.save();
        res.status(200).json({message:"User sign up successful"});
    }catch (error) {
        res.status(500).json({message:"User sign up failed",error:error.message});
    }
})

// Server http post request handling for user login
app.post("/login",async(req,res)=>{
    const {email,password} =  req.body; 
       try{
        const alreadyUser = await User.findOne({email})
       

        res.status(200).json({message:alreadyUser})
    }
    catch (error){
res.status(500).json({message:"login failed", error:error.message})
    }
})
// Server http get request for fetching the entire user database

app.post("/addtask",async (req,res)=>{

    const {taskname,taskdetails} =  req.body
    try{
        const newTask = new Task({taskname,taskdetails});
        await newTask.save()
        res.status(200).json({message:"task added successfully"})
    }catch(error){
        res.status(500).json({message:"new task added"})
    }
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})