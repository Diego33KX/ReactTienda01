import React,{ useState, useEffect, createContext, useContext} from "react";
import { DataContext } from "../Context/dataProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
export const DetallesProducto =()=>{
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito
    const [detallesproductos,setDetallesproductos] = useState({
        id:'',
        nombre:'',
        categoria_id:'',
        pais_id:'',
        precio:'',
        stock:'',
        marca:'',
        talla:'',
        genero:'',
        img_delante:'',
        img_atras:'',
        cantidad:'',
        descripcion:'',
        pub_date:''
      })
    //PRODUCTO POR ID
    const {id} = useParams();
    
    useEffect(()=>{
        getDetallesProductos();
    },[detallesproductos])
    const getDetallesProductos=()=>{
        axios.get('http://localhost:8081/api/products/'+id+'/').then(response =>{
          const detProd = response.data
          setDetallesproductos(detProd)
        })
      }

    return(
        <div>
            <h1>Nombre: {detallesproductos.nombre}</h1>
            <img src={detallesproductos.img_delante}></img>
            <h3>Marca: {detallesproductos.marca}</h3>
            <p>descripcion:{detallesproductos.descripcion}</p>
            <div>
            <button className='btn btn-warning' onClick={()=>addCarrito(detallesproductos.id)}>Agregar al carrito</button>
            </div>
        </div>
    )

}