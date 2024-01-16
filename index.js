import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import booksRouter from './routes/booksRoute.js';
import authorsRoute from './routes/authorsRoute .js';
import Book from './models/books.js';
import Author from './models/authors.js';

dotenv.config();


const {MONGO_URI}=process.env;

await mongoose.connect(MONGO_URI)

const app = express();

app.use(express.json());

app.use('/books' , booksRouter)
app.use('/authors' , authorsRoute)


app.use(morgan('dev'));

app.listen(3000,()=>{
    console.log('server in ascolto su porta 3000')
})