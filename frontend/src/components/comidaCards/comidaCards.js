import React, {useState, useEffect} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import './comidaCards.css'

function ComidaCards (data) {
  const DisplayProductos = (data) => {
    const {productos} = data;

    return(
      productos.map((producto) => {
        return(
          <Card>
            {/* <Image src={producto.foto} wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{producto.plato}</Card.Header>
              {/* <Card.Meta>
                <span className='description'>{producto.descripcion}</span>
              </Card.Meta> */}
              <Card.Description>
                  Precio: {producto.precio}
              </Card.Description>
              <Card.Description>
                  Descripcion: {producto.descripcion}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Button color='yellow'>
                  <Button.Content visible>+</Button.Content>
                </Button>
              </a>
            </Card.Content>
          </Card>
        )
      })
    )
  }
  
  return (
    <>
    {DisplayProductos(data)}
    </>
  )

}

export default ComidaCards