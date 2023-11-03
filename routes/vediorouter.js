const express=require("express");
const vediorouter=express.Router();

vediorouter.get("/videos",function(req,res){
    return res.send([{id: "l",link:"some vedio link"}]);
})
vediorouter.post("/video",function(req,res){
    console.log(req.body);
    return res.send({body: req.body, responce:"success"});
})
module.exports=vediorouter;