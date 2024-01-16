import mongoose from 'mongoose'
import Author from "../models/authors.js";

const {Schema , SchemaTypes, model}= mongoose;

const bookSchema =new Schema({
    title:String,
    year:Number,
    author:{
        type:SchemaTypes.ObjectId,
        ref:'Author'    
    }
});

const Book=model('Book', bookSchema);

export default Book 

