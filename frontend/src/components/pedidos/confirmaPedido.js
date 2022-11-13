import React from 'react'
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


const ConfirmaPedido = () => {

let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/confirmar`; 
  navigate(path);
}


return (
    <div>
    <Button color='blue' onClick={routeChange}>Confirmar Pedido</Button>
    </div>
)
    

}

export default ConfirmaPedido