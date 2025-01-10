const express = require("express");
const app = express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("express is working on port 3000")

//app.post

app.listen(3000,function(){
    console.log("Server is Running on 3000");
})