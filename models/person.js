import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required:true},
    email: {type: String, required:true, unique:true},
},{timestamps:true})

export const Person = mongoose.model("Person",personSchema)
