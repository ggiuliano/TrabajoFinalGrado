import React, {Component }from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavbarComp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Bienvenido Usuario'
          active={activeItem === 'Productos'}
          onClick={this.handleItemClick}
        >
          Bienvenido Mesero
        </Menu.Item>

        <Menu.Item
          name='Carrito'
          active={activeItem === 'Carrito'}
          onClick={this.handleItemClick}
        >
          {/* <a>
            <Icon name='shopping cart' />
          </a> */}
          Tomar Orden
        </Menu.Item>

        <Menu.Item
          name='Carrito'
          active={activeItem === 'Carrito'}
          onClick={this.handleItemClick}
        >
          Ordenes Generadas
        </Menu.Item>

        {/* <Menu.Item
          name='Carrito'
          active={activeItem === 'Carrito'}
          onClick={this.handleItemClick}
        >
          Pedidos
        </Menu.Item> */}


      </Menu>
    )
  }
}
