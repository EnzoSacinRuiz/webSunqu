import logo from './logo.svg';
import './App.css';
import Home from './views/home/home.component';
import Servicios from './views/servicios/servicios.component';
import Insights from './views/insights/insights.component';
import Equipo from './views/equipo/equipo.component';
import Nosotros from './views/nosotros/nosotros.component';

import {Route,BrowserRouter,Routes} from "react-router-dom"

import './assets/fonts/fonts.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/insights" element={<Insights/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/equipo" element={<Equipo/>}/>




      
    </Routes> 
 </BrowserRouter>
  )
  
}

export default App;
