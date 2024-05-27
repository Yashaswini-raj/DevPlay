import mongoose from 'mongoose'
import { DB_name } from '../constants.js'

const connectDB= async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
       console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED",error)
        process.exit(1);
    }
}

export default connectDB;