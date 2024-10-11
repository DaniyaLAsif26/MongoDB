const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat.js")
const methodOverride = require("method-override")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() => {
    console.log("Connected to mongodb")
})
    .catch((err) => console.log(err));


//Routes
app.listen(8080, () => {
    console.log("server listening on port 8080")
})

app.get("/", (req, res) => {
    res.send(" Hello , Server working")
})

//index
app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs",{chats })
})

//new
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

//post
app.post("/chats",(req,res) =>{
    let {from,msg,to} = req.body
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        date:new Date()
    })
    newChat.save().then(() => {
        console.log("Chat saved");
    }).catch((err) =>{
        console.log(err)
    })
    res.redirect("/chats")
})

//edit
app.get("/chats/:id/edit", async(req,res) =>{
    let {id} = req.params
    let chat = await Chat.findById(id)
    res.render("edit.ejs",{chat})
})

//put
app.put("/chats/:id",async(req,res) =>{
    let {id} = req.params
    let {msg : newMsg} = req.body
    let updateChat = await Chat.findByIdAndUpdate(id,{msg : newMsg}, {runValidators:true , new:true})
    res.redirect("/chats")
})

//delete
app.delete("/chats/:id",async(req,res) => {
    let {id}= req.params
    let deleteChat = await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
})