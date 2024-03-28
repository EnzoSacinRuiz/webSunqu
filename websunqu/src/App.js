import logo from './logo.svg';
import './App.css';
import Home from './views/home/home.component';

import {Route,BrowserRouter,Routes} from "react-router-dom"

import './assets/fonts/fonts.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes> 
 </BrowserRouter>
  )
  
}

export default App;
