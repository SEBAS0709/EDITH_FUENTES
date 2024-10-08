const fraseCtrl = {}

const Frase = require("../models/Frase")

fraseCtrl.getFras = async(req, res) =>{
    try {
        const frases = await Frase.find()
        res.json(frases)
        
    } catch (error) {
        console.log(error)
    }
}

fraseCtrl.createFras = async(req, res) =>{
    try {
        const {autor, cita} = req.body;
        const newFras = new Frase({
            autor: autor,
            cita: cita
        })
        await newFras.save();
        res.json({message: "la frase a sido creada"})
        
    } catch (error) {
        console.log(error)

    }
}

fraseCtrl.getFrase = async(req, res) =>{
    try {
        const frase = await Frase.findById(req.params.id)
        res.json(frase)
        
    } catch (error) {
        console.log(error)

    }
    
}

fraseCtrl.deleteFras = async(req, res) =>{

    try {
        await Frase.findByIdAndDelete (req.params.id)
        res.json({message: "la frase a sido eliminada"})
        
    } catch (error) {
               console.log(error)

    }
    
}

fraseCtrl.updateFras = async(req, res) =>{
    try {
        
        const {autor, cita} = req.body;
        await Frase.findByIdAndUpdate(req.params.id, {
            autor,
            cita,
        })
        res.json({message: "la frase a sido actualizada"})   
    } catch (error) {
        console.log(error)

    }
}

module.exports = fraseCtrl;
