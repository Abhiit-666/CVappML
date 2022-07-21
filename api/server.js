import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import CV from './model/CV.js'

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://abhijit:BinaryBug12@cluster0.zhnrv.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("connected to the DB"))
    .catch(console.err);


app.get('/CV', async(req,res)=>{
    const CVs=await CV.find();

    res.json(CVs);
})

app.listen(3001, () => console.log("Server started on port 3001"));
