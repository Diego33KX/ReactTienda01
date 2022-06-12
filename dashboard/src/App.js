import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import Navbar from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import Paises from './pages/Paises';
import Categorias from './pages/Categorias';
import Producto from './pages/Productos';
import Home from './pages/Home';
import {DataProvider} from './context/Dataprovider';
import { Carrito } from './Carrito/index';
class App extends Component {
  render(){
    return(
      <DataProvider>
      <Router>
        
        <div className='flex'>
        <Sidebar></Sidebar>
        <div className='content w-100'>
          <Carrito></Carrito>
        <Navbar></Navbar>
        
          <Routes>
          
              <Route path='/' exact element={<Home/>}/>
              <Route path="/productos" exact element={<Producto/>} />
              <Route path="/sales" exact element={<Sales />} />
              <Route path="/clients" exact element={<Clients />} />
              <Route path="/paises" exact element={<Paises/>} />
              <Route path="/categorias" exact element={<Categorias/>} />
            </Routes>
        </div>
        </div>
      </Router>
      </DataProvider>
      
    );
  };
  
}

export default App;
