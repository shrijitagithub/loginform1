const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const userRoute = require('../api/route/user');

mongoose.connect('mongodb+srv://shrijita:smaitra2909@login-register.ot1cssw.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database.....');
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/user',userRoute);

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running'
    })
})



module.exports = app;