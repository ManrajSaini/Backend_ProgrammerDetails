const mongoose = require("mongoose");

const ProgrammerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    hasJob: {
        type: Boolean,
        required: true
    }
});

const Programmer = mongoose.model("Programmer", ProgrammerSchema);

module.exports = Programmer;