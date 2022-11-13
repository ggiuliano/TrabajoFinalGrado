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
            message: 'Que fecha quiere la reserva?',
            trigger: '5',
        },
        {
            id: '5',
            user: true,
            trigger: '6',
        },
        {
            id: '6',
            message: 'Que horario quiere?',
            trigger: '7',
        },
        {
            id: '7',
            user: true,
            trigger: '8',
        },
        {
            id: '8',
            message: 'a nombre de quien queda la reserva?',
            trigger: '9',
        },
        {
            id: '9',
            user: true,
            trigger: 'submit',
        },
        {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
        },
        {
          id: 'no-submit',
          message:'Your information was not submitted.', 
          end: true,
        },
        {
          id: 'end-message',
          component: <Post />,
          asMessage: true,
          end: true,
        },
        // {
        //   id: '2',
        //   options: [
        //     { value: 1, label: 'Number 1', trigger: '4' },
        //     { value: 2, label: 'Number 2', trigger: '3' },
        //     { value: 3, label: 'Number 3', trigger: '3' },
        //   ],
        // },
      ];

    return (
        <div id='chatbot'>
            <ChatBot steps={steps}/>
        </div>
        
    )
    
}

export default Chatbot