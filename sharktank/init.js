const mongoose = require("mongoose")
const Chat = require("./models/chat.js")

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() => {
    console.log("Connected to mongodb")
})
    .catch((err) => console.log(err));

let s1ep1 = [
    {
        ep: 1,
        pitchNo: 1,
        brand: "BluePine Industries",
        idea: "Frozen Momos",
        city: "Faridabad",
        ask:"50 lakhs for 5% equity",
        deal:"75 lakhs for 16% equity",
        investment:["Ashneer Grover","Vineeta Singh","Aman Gupta"]
    }
]
