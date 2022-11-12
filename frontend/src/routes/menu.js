import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Categorias from '../components/menu/categorias'
import ComidaCards from '../components/comidaCards/comidaCards'
const listadoProductos = 'http://localhost:8080/prd/listadoCarta'

const useAxiosGet = (url) => {
  const [items, setMenuItems] = useState([])

  useEffect(() => {
    axios.get(url)
    .then((response) => setMenuItems(response.data))
    .catch(error => console.error(`Error: ${error}`))
  }, []);

  return {items};
}



const Menu = () => {

  const {items} = useAxiosGet(listadoProductos) //tengo todos los items
    //tengo todas las categorias
  const [itemsCarta, setItems] = useState(items);
  const allCategories = ['todas', ...new Set(itemsCarta.map((item) => item.categoria))]
  const [lasCategorias, setCategories] = useState([allCategories])


  console.log(lasCategorias)



  const filterItems = (categoria) => {
      if (categoria === 'todas') {
        setItems(items)
        console.log(itemsCarta)
        return
      }
      const newItems = items.filter((item) => item.categoria === categoria)
      setItems(newItems)
      console.log(itemsCarta)
    }


  //console.log(allCategories)
  
    
  return (
      <section className="menu section" id='menuSelection'>
        <div className="title">
          <h2>Nuestro Menu</h2>
          <div className="underline"></div>
        </div>
        <Categorias categories={lasCategorias} filterItems={filterItems} />
        <div className='ui_cards'>
          <ComidaCards productos={items}/>
        </div>
      </section>
  );
};

export default Menu




