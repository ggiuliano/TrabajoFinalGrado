const { Schema, model } = require('mongoose')

const pedidosSchema = new Schema({
    id:String,
    tipo:String,
    direccion:String,
    idComanda:String,
    pedido:[{
        id:String,
        plato:String,
        detalle:String,
        cantidad:Number,
    }],
})

module.exports = model('pedidos', pedidosSchema);