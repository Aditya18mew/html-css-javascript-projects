
const express=require("express")
const { copyFileSync } = require("fs")
const path=require("path")
const { listSet } = require("side-channel")









const app=express()
app.use(express.static("./app files"))
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.status(200).send("hello")  
})
app.get("/contact",function(req,res){
    res.status(200).sendFile(path.resolve(__dirname,"./app files/contact.html")) 
})
app.get("/about",function(req,res){
    res.status(200).sendFile(path.resolve(__dirname,"./app files/about.html")) 
})



app.post("/names",function(req,res){
let {name,email}=req.body

console.log(name,email)


})




app.listen(5000,function(){
    console.log("i am great")
   
})

