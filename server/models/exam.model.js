console.log("exam.model.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({

    pName: {
        type: String,
        required: [true, "Name is required"],
        minlength:[3, "Name has to be atleast 3 characters or more"]
    },
    pType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength:[3, "Type has to be atleast 3 characters or more"]
    },
    pDescription: {
        type: String,
        required: [true, "Description is required"],
        minlength:[8, "Description has to be atleast 8 characters or more"]
    },
    skill1: {
        type: String,
        required: [true, "Skill is required"],
        minlength:[3, "Skill has to be atleast 3 characters or more"]
    },
    skill2: {
        type: String,
        required: [true, "Skill is required"],
        minlength:[3, "Skill has to be atleast 3 characters or more"]
    },
    skill3: {
        type: String,
        required: [true, "Skill is required"],
        minlength:[3, "Skill has to be atleast 3 characters or more"]
    },

}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);