const { Schema, model } = require('mongoose')

const reservaSchema = new Schema({
    id:String,
    fecha:String,
    hora:String,
    nombreReserva:String,
})

module.exports = model('reservas', reservaSchema);