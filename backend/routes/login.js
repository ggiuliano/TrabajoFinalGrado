const express = require('express')
const path = require('path')

const routerLogin = express.Router()

//Rutas para Login
module.exports = routerLogin.get('/login', (req, res) => {
    
})

module.exports = routerLogin.post('/login', (req, res) => { //funcion para utilizar passport autentication
    
})

module.exports = routerLogin.get('/loginFail', (req, res) => {
    
})


//Rutas para Registro
module.exports = routerLogin.get('/registro', (req, res) => {
    
})

module.exports = routerLogin.post('/registro', (req, res) => { //funcion para utilizar passport autentication
    
})

module.exports = routerLogin.get('/registroFail', (req, res) => {
    
})



//Rutas para Logout
module.exports = routerLogin.get('/logout', (req, res) => {
    
})



module.exports = routerLogin