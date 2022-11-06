import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Menu from './routes/menu'

function App() {

  
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/menu' element={<Menu/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
