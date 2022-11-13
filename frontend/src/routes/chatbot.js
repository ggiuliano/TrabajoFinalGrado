import React from 'react'
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import Post from '../components/chatbot/crearReserva';

const Chatbot = () => {

    const steps = [
        {
          id: '1',
          message: 'Bienvenido, soy el gestor de reservas, en que te puedo ayudar?',
          trigger: '2',
        },
        {
          id: '2',
          options:[
            {value: 1, label: 'Crear Reserva', trigger: '4'},
            {value: 2, label: 'Modificar Reserva', trigger: '4'},
            {value: 3, label: 'Cancelar Reserva', trigger: '4'}
          ]
        },
        {
            id: '4',
            message: 'Para crear Reserva, voy a necesitar',
            trigger: '1',
        },
        // {
        //     id: '2000',
        //     message: 'Para modificar Reserva, voy a necesitar',
        //     trigger: '1',
        // },
        // {
        //     id: '3000',
        //     message: 'Para cancelar tu reserva, necesito que me pases el ID de la misma',
        //     trigger: '9999',
        // },
        // {
        //     id: '4',
        //     end: true,
        // }
        // {
        //     id: '1',
        //     message: 'What is your name?',
        //     trigger: '2',
        //   },
        //   {
        //     id: '2',
        //     user: true,
        //     trigger: '3',
        //   },
        // {
        //     id: '1',
        //     message: 'What number I am thinking?',
        //     trigger: '2',
        // },
        // {
        //   id: '2',
        //   options: [
        //     { value: 1, label: 'Number 1', trigger: '4' },
        //     { value: 2, label: 'Number 2', trigger: '3' },
        //     { value: 3, label: 'Number 3', trigger: '3' },
        //   ],
        // },
        {
          id: '5',
          message: 'Awesome! You are a telepath!',
          end: true,
        },
      ];

    return (
        <div id='chatbot'>
            <ChatBot steps={steps}/>
        </div>
        
    )
    
}

export default Chatbot