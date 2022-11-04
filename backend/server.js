//Librerias
const express = require('express')
const moment = require('moment')
const cors = require('cors')
const { getConnection } = require('./dao/db/connection')
const { PORT } = require('./config/globals')


const app = express()
app.use(cors())

//Routers
const routerClientes = require('./routes/clientes')
const routerEmpleados = require('./routes/empleados')
const routerLogin = require('./routes/login')
const routerOrdenes = require('./routes/ordenes')
const routerProductos = require('./routes/productos')
const routerReservas = require('./routes/reservas')
const routerStats = require('./routes/stats')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/cli', routerClientes)
app.use('/emp', routerEmpleados)
app.use('/log', routerLogin)
app.use('/ord', routerOrdenes)
app.use('/prd', routerProductos)
app.use('/rsv', routerReservas)
app.use('/sta', routerStats)

//LEVANTO EL SERVER
getConnection().then((message) => { 
    console.log(message);
    app.listen(PORT, () =>{ //TODO: PONER EN SERVER PARA WEBSOCKET
        console.log(`Listening on port: ${PORT}`);
    });
}).catch(console.log);


//TEST
app.get('/', (req, res) => {
    res.send('HOLA')
})