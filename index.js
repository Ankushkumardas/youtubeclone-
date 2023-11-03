const express=require("express");
const mongoose= require("mongoose")

const vediorouter =require("./routes/vediorouter")
const app=express();
app.use(express.json());

const dburl="mongodb://localhost:27017/youtubeclone"
mongoose.connect(dburl)

.then(()=>{
    console.log("database connected",dburl)
})

.catch(()=>{
    console.log("database isn't connected",console.error)
})

app.get("/",function(req,res){
    return res.send("helloserver!")
})

//additional routers
app.use(vediorouter)

app.listen(5500,function(){

    console.log("app server running on 5500");
})