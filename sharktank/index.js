const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const path = require("path")

const season1 = require("./models/season1.js")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('__method'))

app.use('/assets', express.static('assets'));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sharktank');
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

app.get("/home", async (req, res) => {
    try {
        let s1 = await season1.find();   
        res.render("index.ejs", { s1 }); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching episodes");
    }
});
 
