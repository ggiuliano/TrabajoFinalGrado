const { Schema, model } = require('mongoose')

const meserosSchema = new Schema({
    dni:String,
    nombre:String,
    apellido:String,
})

module.exports = model('meseros', meserosSchema);