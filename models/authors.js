import mongoose from 'mongoose'

const {Schema , SchemaTypes, model}= mongoose;

const addressSchema =new Schema({
    street:String,
    number:Number,
    city:String
});
 
const authorSchema=new Schema ({
    name:String,
    first_Name:String,
    age:Number,
    address:addressSchema
});
 
const Author=model('Author', authorSchema);

export default Author 

