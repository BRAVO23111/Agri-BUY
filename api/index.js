/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors');
const app = express();
const moongose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
// app.use(cors({ credentials: true, origin: "http://localhost:3000"}));

app.use(express.json())
const salt = bcrypt.genSaltSync(10);
const secret = 'asd6sdsdvsd6sdsbds7sd'
moongose.connect("mongodb+srv://test:26PTr1g1skvwctnh@cluster0.a5o1qdu.mongodb.net/?retryWrites=true&w=majority")

// app.use(cors({ credentials: true, origin:'https://locahost:3000' }));
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    try{
        const Userdoc=await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        })
        res.json(Userdoc)
    }
    catch(e){
            res.status(400).json(e)
    }
    
})
app.post('/login',async(req,res)=>{
    const {username,password}= req.body;
    const Userdoc = await User.findOne({username});
    const passok = bcrypt.compareSync(password,Userdoc.password);
    if(passok){
        //logged in
        jwt.sign({username,id:Userdoc._id},secret,{},(err,token)=>{
            if (err) throw err;
                res.cookie('token',token).json('ok')
        })
    }
    else{
        res.status(400).json('wrong credentials')
    }
})


app.listen(3000,(req,res)=>{
    console.log("server at 3000");
})




//26PTr1g1skvwctnh