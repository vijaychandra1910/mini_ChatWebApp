const mongoose = require('mongoose');
const Chat = require('./models/chat');
main().then(()=>{
    console.log("connection successfull");
})
.catch(err=>{console.log(err)});
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')}

    let allChats= [
         {
        from:"John",
        to:"Yash",
        message:"Hello",
        created_at:new Date
    },
{
    from:"Vijay",
        to:"Noni",
        message:"What are you doing",
        created_at:new Date

},
{
    from:"Noni",
        to:"Vijay",
        message:"Nothing V",
        created_at:new Date

}];

Chat.insertMany(allChats);