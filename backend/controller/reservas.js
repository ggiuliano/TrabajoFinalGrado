const reservasModel = require('../dao/models/reserva')


module.exports = class ReservasDB {
    constructor() {}

    async listarTotalReservas(){
        let listaReservas = await reservasModel.find()
        return listaReservas
    }

    async crearReserva({fecha, hora, nombreReserva}){
        let totalReservas = await this.listarTotalReservas()
        let cantidad = totalReservas.length + 1
        let nuevaReserva = {
            id: cantidad,
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