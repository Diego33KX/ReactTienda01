import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { DataContext } from '../Context/dataProvider';
const Navbar = () => {

    const value = useContext(DataContext);
    const [categorias] = value.categorias;
    const [paises] = value.paises;
    const [menu,setMenu] = value.menu;
    const [carrito] = value.carrito;
    const filtroPais = value.filtroPais;
    const filtroCategorias = value.filtroCategorias;
    const detallCategoria = value.detallCategoria
    const detallPais = value.detallPais;
    console.log(categorias)
    const toogleMenu = () =>{
      setMenu(!menu)
    }
    
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container p-3">
              <a class="navbar-brand h1 logo-style" href="#">ContigoPE</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href='https://www.adidas.pe/'>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>Productos</a>
                  </li>
                  
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorias
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {
                        categorias.map(cat =>(
                          <li class="nav-item" key={cat.id}>
                            <Link to="/decategoria" onClick={()=>{filtroCategorias(cat.id);detallCategoria(cat.id)}}>{cat.nombre}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  
                  <li class="nav-item dropdown">
                      <a className='nav-link dropdown-toggle' href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Paises
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {
                        paises.map(pais =>(
                          <li class="nav-item" key={pais.id}>
                            <Link to="/detalles" onClick={()=>{filtroPais(pais.id);detallPais(pais.id)}}>{pais.nombre}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>Nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href='https://www.adidas.pe/'>¿Que somos?</a>
                  </li>
                </ul>
                <div>
                  <button class='m-2 btn btn-outline-primary'><i class="bi bi-person-lines-fill"> Registrar</i></button>
                  <button class="m-2 btn btn-outline-danger" type="submit"><i class="bi bi-person-circle"> Ingresar</i></button>
                  <button class="m-2 btn btn-outline-success" type="submit" onClick={toogleMenu}><i class="bi bi-cart-plus"> Comprar</i></button>
                  <span className="item__total">{carrito.length}</span>
                
                </div>
              </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;