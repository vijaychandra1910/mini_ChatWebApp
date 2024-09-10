const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path= require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));  //For parsing the data from body
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("connection successfull");
})
.catch(err=>{console.log(err)});

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')}

//Index Route
app.get('/chats', async(req, res) => {
        let chats=await Chat.find(); //Asynchronous function
        // console.log(chats);
        res.render("index",{ chats })
})

//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new");
})

//Create Route
app.post("/chats",(req,res)=>{
    let {from,to,message} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:message,
        created_at:new Date(),
    });
        newChat.save().then((res)=>  {console.log("chat saved")})   //That is thenable no need to specify await bcz thenable is also asyncronous .
        .catch((err)=>{console.log(err)})
        res.redirect("/chats");
})

//Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat = await Chat.findById(id); //Bcs finding the data from database is asynchronouse.
    res.render("edit",{chat});
});

//Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let {message:newMsg} = req.body;
    let updateChat =await Chat.findByIdAndUpdate(id,
        {message:newMsg},{runValidators:true,new:true});
    res.redirect("/chats");
});

//Delet Route
app.delete("/chats/:id",async(req,res)=>{
    let{id}= req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("Root is working");
})
app.listen(8080,()=>{
    console.log('server is running on port 8080');
})