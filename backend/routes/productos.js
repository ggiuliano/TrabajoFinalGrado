const express = require('express')
const path = require('path')
const Carta = require('../controller/carta')

const routerProductos = express.Router()

module.exports = routerProductos.get('/listadoCarta', async (req, res) => {
    const cartaCompleta = await new Carta().listarCarta()
    res.send(cartaCompleta)
})

module.exports = routerProductos.post('/productoCarta', async (req, res) => {
    const nuevoProducto = await new Carta().agregarProducto({
        categoria: req.body.categoria,
        plato: req.body.plato,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    })
    res.send('Producto sumado a la carta con Exito')
})

module.exports = routerProductos.get('/Carta', async (req, res) => {
    let pathPublic = path.join(__dirname, '..', 'public')
    res.sendFile(pathPublic + '/menuOrden.html')
})


module.exports = routerProductos