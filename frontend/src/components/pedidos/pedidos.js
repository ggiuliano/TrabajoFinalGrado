import React from 'react'
import { Table } from 'semantic-ui-react'

const Pedidos = () => {
  return (
    <div className="ui_cards">
      <Table compact='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Producto</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>milanesa</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>papas fritas</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>900</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>coca-cola</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>900</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </div>

  )
}

export default Pedidos