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
        // const userObject = {
        //     fecha:this.state.fecha.value,
        //     hora:this.state.hora.value,
        //     nombreReserva:this.state.nombreReserva.value,
        // };
        // console.log(userObject)

        // axios.post(`http://localhost:8080/rsv/crearReserva`, userObject)
        // .then(res => {
        //   console.log(res.status)
        // }).catch(function(error) {
        //   console.log(error);
        // });
    }
  
    render() {
        return (
            <div>
                <p>Gracias! Su reserva fue creada con exito</p>
                <p>id de reserva: 10</p>
            </div>
            );
   }    
     
  };
  
export default Post;