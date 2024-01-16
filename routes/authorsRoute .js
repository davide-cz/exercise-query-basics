import mongoose from "mongoose"
import Author from '../models/authors.js';
import express from 'express';

const router=express.Router()

router.get('/' , async (req,res)=>{
    try{
        const authors=await Author.find()
        res.send(authors)
    }catch(err){
        res.status(400).send(console.error(err))}
});

router.post('/', async (req,res)=>{
    const author= await Author.create(req.body);
    res.send(author)
});


router.get('/' , async (req,res)=>{
    try{
        const {id}=req.params;
        const author=await Author.findById(id)
        res.send(author)
    }catch(err){
        res.status(404).send(console.error(err))}
});

router.patch(`/:id` , async (req,res)=>{
    try{
        const {id}=req.params;
        await Author.findByIdAndUpdate(id, req.body);
        const author = await Author.findById(id);
        res.send(author); 
    }catch(err){
        res.status(400).send(err.message);
    }
});

router.delete(`/:id` , async (req,res)=>{
    try{
        const {id}=req.params;
        await Author.findByIdAndDelete(id);
        res.send(`author with id ${id} was delete`); 
    }catch(err){
        res.status(404).send(err.message);
    }
});



export default router