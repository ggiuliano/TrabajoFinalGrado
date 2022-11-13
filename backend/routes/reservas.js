const express = require('express')
const path = require('path')
const Reservas = require('../controller/reservas')

const routerReservas = express.Router()

module.exports = routerReservas.get('/listaTotalReservas', async (req, res) => {
    const listadoTotalReservas = await new Reservas().listarTotalReservas()
    res.send(listadoTotalReservas)
})

module.exports = routerReservas.post('/crearReserva', async (req, res) => {
    const nuevaReserva = await new Reservas().crearReserva({
        fecha: req.body.fecha,
        hora: req.body.hora,
        nombreReserva: req.body.nombreReserva})
    res.send('Reserva creada con Exito')
})




module.exports = routerReservas