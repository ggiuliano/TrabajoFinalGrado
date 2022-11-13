import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { fecha, hora, nombreReserva } = steps;
    
        this.state =  { fecha, hora, nombreReserva }; 
    }
    
  
    componentDidMount() {
        const userObject = {
            fecha:this.state.fecha.value,
            hora:this.state.hora.value,
            nombreReserva:this.state.nombreReserva.value,
        };
        axios.post(`https://localhost:8080/rsv/crearReserva`, userObject)
        .then(res => {
          console.log(res.status)
        }).catch(function(error) {
          console.log(error);
        });
    }
  
    render() {
        return (
            <div>Gracias! Su reserva fue creada con exito</div>
            );
   }    
     
  };
  
  export default Post;