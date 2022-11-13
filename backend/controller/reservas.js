const reservasModel = require('../dao/models/reserva')


module.exports = class ReservasDB {
    constructor() {}

    async listarReservas(){
        let listaReservas = await reservasModel.find()
        return listaReservas
    }

    async crearReserva({fecha, hora, nombreReserva}){
        let nuevaReserva = {
            id: 'r' + nombreReserva,
            fecha,
            hora,
            nombreReserva
        }
        await reservasModel.create(nuevaReserva)
    }

    async modificarReserva(){
        // let listarMeseros = this.listarMeseros()
        // let index = (await listarMeseros).findIndex(f => f.dni == dni)
        // let meseroEdit = listarMeseros[index]
    }

    async borrarReserva(){

    }
}