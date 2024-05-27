// require('dotenv').config({path:'./env'}) 
// code ki consistency karab ho jate
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './db/index.js';

import express from 'express'
const app=express();

dotenv.config({path:'./env'})

connectDB();

















/*
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
       app.on("error",(error)=>{
        console.log("ERROR",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log("server is running")
       })
        
        
    } catch (error) {
        console.error("ERROR",error);
        throw error
    }
})()

*/

// function connectDB(){}

// connectDB();

