const { Schema, model } = require('mongoose')

const usuariosSchema = new Schema({
    id:String,
    mail:String,
    password:String,
    nombre:String,
    apellido:String,
    direccion:String,
    localidad:String,
    pedido:[{
        id:String,
        plato:String,
        detalle:String,
        cantidad:Number,
    }],
    reserva:[{
        fecha:String,
        hora:String,
    }]
})

module.exports = model('usuarios', usuariosSchema);