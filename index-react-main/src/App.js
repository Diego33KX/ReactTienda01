import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//Paginas
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

import Footer from './pages/Footer';
import Contenido from './pages/Contenido';
import { DataProvider } from "./Context/dataProvider";
import { Carrito } from './carrito/carrito';
import { Detalles } from './pages/Detalles';
import { Detallescate } from './pages/Detallescate';
import { DetallesProducto } from './pages/DetallesProducto';
const App = () => {
  return (
    <DataProvider>
    <Router>
      <Navbar/>
      <Contenido/>
      <Container>
        <Carrito></Carrito>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/detalles' element={<Detalles/>}/>
          <Route exact path='/decategoria' element={<Detallescate/>}/>
          <Route exact path='/detallesProducto/:id' element={<DetallesProducto/>}/>
        </Routes>

      </Container>
      <Footer/>
      
    </Router>
    </DataProvider>
  )
}


export default App;
