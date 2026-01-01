import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDb from './database/connectDb.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';

const app = express();

const PORT = 5000;


app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin : process.env.FRONTEND_URL  || 'http://localhost:5173',
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

const db = await connectDb();
app.locals.db = db;

app.get('/' , (req , res) => {
    console.log("Hello World")
})

app.use('/api' , authRoutes);
app.use(errorHandler);

app.listen(PORT , () => console.log(`APP is listening at PORT ${PORT}`));