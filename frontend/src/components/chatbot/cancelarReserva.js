import React, { Component } from 'react';
import axios from 'axios';

class CancelReserva extends Component {
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { submit, fecha, hora, nombreReserva } = steps;
    
        this.state =  { submit, fecha, hora, nombreReserva }; 
    }
    
  
    componentDidMount() {
        // const userObject = {
        //     submit: this.state.submit.value,
        //     fecha:this.state.fecha.value,
        //     hora:this.state.hora.value,
        //     nombreReserva:this.state.nombreReserva.value,
        // };
        // axios.get(`http://localhost:8080/rsv/listaTotalReservas`, userObject)
        // .then(res => {
        //   console.log(res.status)
        // }).catch(function(error) {
        //   console.log(error);
        // });
    }
  
    render() {
        return (
            <div>
                <p>Su reserva fue cancelada</p>
            </div>
            );
   }    
     
  };
  
  export default CancelReserva;