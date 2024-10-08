const {Schema, model} = require("mongoose")

const fraseSchema = new Schema({
    autor: String,
    cita: String
},
{
    timestamps: true
})

module.exports = model("Frase", fraseSchema)