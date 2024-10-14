const mongoose = require("mongoose")

const pitchSchema = new mongoose.Schema({
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
        type: String
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
        type: [String],

    },
    link: {
        type: String
    }
})

const episodeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    pitches: [pitchSchema]
})


const Season1 = mongoose.model("Season1", episodeSchema)

module.exports = Season1