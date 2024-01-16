import mongoose from "mongoose"
import Book from '../models/books.js';
import express from 'express';
import Author from "../models/authors.js";

const router=express.Router()

router.get('/' , async (req,res)=>{
    try{
        const books=await Book.find();
        res.send(books)
    }catch(err){
        res.status(400).send(console.error(err))}
});

router.post('/', async (req,res)=>{
    const book= await Book.create(req.body);
    res.send(book)
});


router.get('/' , async (req,res)=>{
    try{
        const {id}=req.params;
        const book=await Book.findById(id)
        res.send(book)
    }catch(err){
        res.status(404).send(console.error(err))}
});

router.patch(`/:id` , async (req,res)=>{
    try{
        const {id}=req.params;
        await Book.findByIdAndUpdate(id, req.body);
        const book = await Book.findById(id);
        res.send(book); 
    }catch(err){
        res.status(400).send(err.message);
    }
});

router.delete(`/:id` , async (req,res)=>{
    try{
        const {id}=req.params;
        await Book.findByIdAndDelete(id);
        res.send(`book with id ${id} was delete`); 
    }catch(err){
        res.status(404).send(err.message);
    }
});



export default router