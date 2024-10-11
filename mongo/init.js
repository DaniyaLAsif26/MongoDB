const mongoose = require("mongoose")
const Chat = require("./models/chat.js")

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() => {
    console.log("Connected to mongodb")
})
    .catch((err) => console.log(err));

    let allChats =[
        {
            from:"daniyal",
            to:"faraz",
            msg:"Rocket league",
            date: new Date()
        },
        {
            from:"ahbar",
            to:"jawad",
            msg:"bgmi tdm",
            date: new Date()
        },
        {
            from:"aqib",
            to:"faraz",
            msg:"Valorant",
            date: new Date()
        },
        {
            from:"daniyal",
            to:"abdullah",
            msg:"minecraft",
            date: new Date()
        },
        {
            from:"mustafa",
            to:"ahbar",
            msg:"chess",
            date: new Date()
        }
    ]

    Chat.insertMany(allChats)