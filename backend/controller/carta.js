const cartaModel = require('../dao/models/carta')

module.exports = class cartaDB {
    constructor(){}

    async listarCarta(){
        let listadoCarta = await cartaModel.find()
        return listadoCarta
    }

    async agregarProducto({categoria,plato, descripcion, precio}){
        let listadoCarta = await this.listarCarta()
        let cantidad = await listadoCarta.length + 1
        let elProducto = {
            id: cantidad,
            categoria,
            plato,
            descripcion,
            precio
        }
        await cartaModel.create(elProducto)
    }

    

}