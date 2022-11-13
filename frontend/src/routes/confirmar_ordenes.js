import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Categorias from '../components/menu/categorias'
import ComidaCards from '../components/comidaCards/comidaCards'
import InputMesa from '../components/inputMesa/inputmesa'
import Pedidos from '../components/pedidos/pedidos'
import ConfirmaPedido from '../components/pedidos/confirmaPedido'

const ConfirmarOrdenes = () => {


    return (
        <section className="menu section" id='menuSelection'>
          <div className="title">
            <h2>Resumen Pedido</h2>
            <div className="underline"></div>
          </div>
          <div>
          <InputMesa/>
          </div>
          <br/>
          <div>
          <Pedidos/>
          </div>
          <br/>
          <div>
          <ConfirmaPedido/>
          </div>
  
        </section>
    );
};

export default ConfirmarOrdenes

