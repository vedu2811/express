import mongoose from "mongoose";

export const connectDB = async() =>{
    const MONGODB_URI = 'mongodb+srv://vedant28j:Vedu*2811@cluster0.zyy5qif.mongodb.net/express'

    await mongoose.connect(MONGODB_URI).then(()=>{
        console.log('Database Connected');
    })
}
