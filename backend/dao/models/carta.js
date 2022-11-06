const { Schema, model } = require('mongoose')

const cartaSchema = new Schema({
    id:Number,
    categoria:String,
    plato:String,
    descripcion:String,
    precio:Number,
})

module.exports = model('carta', cartaSchema);