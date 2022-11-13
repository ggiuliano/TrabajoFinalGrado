import React from 'react'
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import Post from '../components/chatbot/crearReserva';
import CancelReserva from '../components/chatbot/cancelarReserva';
import VerReservas from '../components/chatbot/verReserva';

const Chatbot = () => {

    const steps = [
        {
          id: '1',
          message: 'Soy el gestor de reservas, en que te puedo ayudar?',
          trigger: 'seleccion',
        },
        {
          id: 'seleccion',
          options:[
            {value: 1, label: 'Crear Reserva', trigger: 'qfecha'},
            // {value: 2, label: 'Modificar Reserva', trigger: 'qID'},
            {value: 3, label: 'Cancelar Reserva', trigger: 'cReserva'},
            {value: 4, label: 'Ver Reserva', trigger: 'vReserva'}
          ]
        },
        {
          id: 'vReserva',
          message: 'Cual es el ID de su reserva?',
          trigger: 'reservaID',
        },
        {
          id: 'reservaID',
          user: true,
          trigger: 'vReservas',
        },
        {
          id: 'vReservas',
          component: <VerReservas />,
          asMessage: true,
          trigger: 'end1'
        },
        {
            id: 'qfecha',
            message: 'Que fecha quiere la reserva?',
            trigger: 'fecha',
        },
        {
            id: 'fecha',
            user: true,
            trigger: 'qhorario',
        },
        {
            id: 'qhorario',
            message: 'Que horario quiere?',
            trigger: 'horario',
        },
        {
            id: 'horario',
            user: true,
            trigger: 'qnombreReserva',
        },
        {
            id: 'qnombreReserva',
            message: 'a nombre de quien quiere la reserva?',
            trigger: 'nombreReserva',
        },
        {
            id: 'nombreReserva',
            user: true,
            trigger: 'confirma',
        },
        {
          id: 'confirma',
          message: 'confirmar reserva?',
          trigger: 'submit',
        },
        {
          id:'submit', 
          options:[
          {value:'y', label:'Si', trigger:'crearReserva'},
          {value:'n', label:'No', trigger:'end1'},
          ] 
        },
        {
          id: 'crearReserva',
          component: <Post />,
          asMessage: true,
          trigger: 'end1'
        },
        {
          id: 'cReserva',
          message: 'Cual es el ID de su reserva a cancelar?',
          trigger: 'cReservaID',
        },
        {
        id: 'cReservaID',
        user: true,
        trigger: 'cancelReservas',
        },
        {
          id: 'cancelReservas',
          component: <CancelReserva />,
          asMessage: true,
          trigger: 'end1'
        },
        {
          id: 'end1',
          message: 'Te ayudo con algo mas?',
          trigger: 'end2',
        },
        {
          id: 'end2',
          options:[
            {value: "y", label: 'Si', trigger: '1'},
            {value: "n", label: 'No', trigger: 'end'},

          ]
        },
        {
          id: 'end',
          message: 'Que tengas un buen dia!',
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