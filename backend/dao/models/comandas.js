const { Schema, model } = require('mongoose')

const comandasSchema = new Schema({
    id:String,
    fecha:String,
    mesa:Number,
    estado:String,
    tiempo:String,
    tipo:String,
    pedido:[{
        id:String,
        plato:String,
        detalle:String,
        cantidad:Number,
    }],
})

module.exports = model('comandas', comandasSchema);