const express = require('express');
const User = require('../Models/user');

const signup = async(req, res, next) =>{
    // try{
    //     const user = await User.create(req.body)
    //     console.log(user);
    //     res.status(201).json({
    //         "status" : "success",
    //         "data": user
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         "status" : "failed",
    //         "error": err
    //     })
    // }
}
const signin = async(req, res, next) =>{
    try{
        // const {email, password} = req.body();
        // const user = await User.findOne({email});
        // if(!user) return res.status(401).json({
        //     "status": "failed",
        //     "data": "user not found please create a new account"
        // })
    }catch(err){
        
    }
}

module.exports = {signin, signup};

