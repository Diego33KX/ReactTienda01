import React,{ useState, useEffect, createContext, useContext} from "react";
import { DataContext } from "../Context/dataProvider";

export const Detallescate = () =>{
    const value = useContext(DataContext);
    //PRODUCTOS FILTRADOS POR CATEGORIA (usa map)
    const [productocat] = value.productocat;
    //DETALLES DE LA CATEGORIA COMO NOMBRE E IMAGEN (no necesita map)
    const [detallescat] = value.detallescat;
    
    return(
        <div>
            <h1>{detallescat.nombre}</h1>
            <img src={detallescat.img} width="50%"></img>
            {
                productocat.map(pcat=>(
                    <ul key={pcat.id}>
                        <li>{pcat.nombre}</li>    
                    </ul>
                ))
            }
        </div>
    )
}