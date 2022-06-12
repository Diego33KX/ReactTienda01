import React, { Component,useContext } from "react"
import { NavLink } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'
import logo from './Logo3.PNG'
import * as BiIcons from "react-icons/bi";
import { DataContext } from "../context/Dataprovider";

export const Sidebar =()=>{
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const toogleMenu = () =>{
        setMenu(!menu)
      }
        return(
            
            <div className="sidebar">
                <ul>
                    <div className="logoprincipal"><img src={logo} alt='Logo' className='logo'/></div>
                    <li></li>
                    <li>
                        <NavLink to="/" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaHome className="me-3"/>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaCartPlus className="me-3"/>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/paises" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaCartPlus className="me-3"/>Paises</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaCartPlus className="me-3"/>Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"> <FaIcons.FaUserAlt className="me-3"/>Ventas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clients" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaCartPlus className="me-3"/>Clientes</NavLink>
                    </li>
                    
                </ul> 
            </div>
            
        )
    
}
export default Sidebar;
