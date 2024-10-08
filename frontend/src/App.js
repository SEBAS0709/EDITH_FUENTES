
import './App.css';
import {Routes, Route} from "react-router-dom"

import Navegacion from './components/Navegacion'; 
import CrearFrases from './components/CrearFrases';
import ListaFrases from './components/ListaFrase';
function App() {
  return (
    <div className="App">
      <Navegacion/>
      <div className='"container p-4'>
        <Routes>
          <Route path='/' element= {<ListaFrases/>}/>
          <Route path='/CrearFrase' element= {<CrearFrases/>}/>
          <Route path='/edit/:id' element= {<CrearFrases/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
