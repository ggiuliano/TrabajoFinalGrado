const meserosModel = require('../dao/models/meseros')

module.exports = class MeserosDB {
    constructor() {

    }

    async listarMeseros(){
        let listaMeseros = await meserosModel.find()
        return listaMeseros
    }

    async crearMesero({dni, nombre, apellido}){
        let nuevoMesero = {
            dni,
            nombre,
            apellido
        }
        await meserosModel.create(nuevoMesero)
    }

    async modificarMesero(){
        // let listarMeseros = this.listarMeseros()
        // let index = (await listarMeseros).findIndex(f => f.dni == dni)
        // let meseroEdit = listarMeseros[index]
    }

    async borrarMesero(){

    }
}