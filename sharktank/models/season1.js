const mongoose = require("mongoose")

const season1Schema = new mongoose.Schema({
    ep: {
        type: Number,
        required: true
    },
    pitchNo: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    idea: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    ask: {
        type: String,
        required: true
    },
    deal: {
        type: String,
        required: true
    },
    investment: {
        type:[String],
        required: true
    }
})

const s1ep1 = mongoose.model("s1ep1",season1Schema)