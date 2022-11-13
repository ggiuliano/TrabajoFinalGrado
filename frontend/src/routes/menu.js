import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Categorias from '../components/menu/categorias'
import ComidaCards from '../components/comidaCards/comidaCards'
import InputMesa from '../components/inputMesa/inputmesa'

const listadoCarta = 'http://localhost:8080/prd/listadoCarta'
const listadoMeseros = 'http://localhost:8080/emp/listaempleados'



const useAxiosGetItems = (url) => {
  const [items, setMenuItems] = useState([])

  useEffect(() => {
    axios.get(url)
    .then((response) => setMenuItems(response.data))
    .catch(error => console.error(`Error: ${error}`))
  }, []);

  return {items};
}

const useAxiosGetMeseros = (url) => {
  const [meseros, setMeseros] = useState([])

  useEffect(() => {
    axios.get(url)
    .then((response) => setMeseros(response.data))
    .catch(error => console.error(`Error: ${error}`))
  }, []);

  return {meseros};
}

const Menu = () => {

  const {items} = useAxiosGetItems(listadoCarta) //tengo todos los items
  const {meseros} = useAxiosGetMeseros(listadoMeseros)
  const allCategories = ['todas', ...new Set(items.map((item) => item.categoria))] //tengo todas las categorias
  const [itemsCarta, setItems] = useState(items);
  const [mesero, setMeseroPedido] = useState()
  const [pedido, setPedido] = useState()

  
  //const [lasCategorias, setCategories] = useState(allCategories)

  const filterItems = (categoria) => {
      if (categoria === 'todas') {
        setItems(items)
        return
      }
      const newItems = items.filter((item) => item.categoria === categoria)
      setItems(newItems)
    }

  const handleChange = (event) => {
    setMeseroPedido(event.target.value)
  }

  return (
      <section className="menu section" id='menuSelection'>
        <div className="title">
          <h2>Menu</h2>
        <div className="underline"></div>
        </div>
        <Categorias categories={allCategories} filterItems={filterItems} />
        <div className='ui_cards'>
          <ComidaCards productos={itemsCarta}/>
        </div>
        <div className="title">
          <h2>Resumen Pedido</h2>
          <div className="underline"></div>
        </div>
        <div>
        <select className="ui search dropdown" onChange={handleChange}>
          <option disabled selected value="" >Mesero...</option>
          {meseros.map(mesero => (
            <option value={mesero.nombre} key={mesero._id}>{mesero.nombre}</option>
          ))}
        </select>
        <br/>
        <br/>
        <InputMesa/>
        </div>

      </section>
  );
};

export default Menu




