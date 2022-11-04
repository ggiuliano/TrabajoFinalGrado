const { Schema, model } = require('mongoose')

const cartaSchema = new Schema({
    plato:String,
    descripcion:String,
    precio:Number,
})

module.exports = model('carta', cartaSchema);