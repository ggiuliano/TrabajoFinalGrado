import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavbarComp from './components/navBar/navBar';

import Menu from './routes/menu'
import Chatbot from './routes/chatbot';
import Home from './routes/home';
import ConfirmarOrdenes from './routes/confirmar_ordenes';

function App() {

  
  return (
    <div className='App'>
      <header>
        <NavbarComp />
      </header>
      <body>
        <Router>
          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/reservas' element={<Chatbot/>} />
            <Route path='/confirmar' element={<ConfirmarOrdenes/>} />
          </Routes>
        </Router>

      </body>

    </div>
    // <main>

    // </main>
  );
}

export default App;
