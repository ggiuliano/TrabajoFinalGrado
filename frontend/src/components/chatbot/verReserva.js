import React, { Component } from 'react';
import axios from 'axios';

class VerReservas extends Component {

    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { reservaID } = steps;
    
        this.state = {
            reservaID,
            fecha:"",
            hora:"",
            nommbreReserva:"",
        }; 
    }
    
  
    componentDidMount() {
        const userObject = {
            id:this.state.reservaID.value,
        };
        
        const url = {
            endpoint: "http://localhost:8080/rsv/verReserva/" + this.state.reservaID.value
        }

        const respuesta = {
            fecha:"",
            hora:"",
            nommbreReserva:"",
            id:""
        }
        console.log(url.endpoint)

        axios.get(url.endpoint)
        .then(res => {
          console.log(res.data[0])
            this.setState({
                fecha:res.data[0].fecha,
                hora:res.data[0].hora,
                nombreReserva:res.data[0].nombreReserva,
            })
        }).catch((error) => {
          console.log(error);
        });
    }
  
    render() {
        return (
            <div>
                <p>Datos de reserva</p>
                <p>Nombre: {this.state.nombreReserva}</p>
                <p>fecha: {this.state.fecha}</p>
                <p>hora: {this.state.hora}</p>      
            </div>
            );
   }    
     
  };
  
export default VerReservas;