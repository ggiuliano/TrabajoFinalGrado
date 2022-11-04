const express = require('express')
const path = require('path')
const Meseros = require('../controller/empleados')

const routerEmpleados = express.Router()


module.exports = routerEmpleados.get('/listaEmpleados', async (req, res) => {
    const listadoMeseros = await new Meseros().listarMeseros()
    res.send(listadoMeseros)
})

module.exports = routerEmpleados.post('/crearEmpleado', async (req, res) => {
    const nuevoEmpleado = await new Meseros().crearMesero({dni: req.body.dni, nombre: req.body.nombre, apellido: req.body.apellido})
    res.send('Mesero creado con Exito')
})




module.exports = routerEmpleados