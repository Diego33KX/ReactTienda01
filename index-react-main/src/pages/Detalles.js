import React,{ useState, useEffect, createContext, useContext} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/dataProvider";
export const Detalles=()=>{
    const value = useContext(DataContext);
    //PRODUCTOS FILTRADOS POR PAIS (usa map)
    const [productpais] = value.productpais;
    //DETALLES DE CADA PAIS, COMO IMAGEN Y NOMBRE (no usa map)
    const [detallespais] = value.detallespais;
    
    return(
        <div>
            <h1>{detallespais.nombre}</h1>
            <img src={detallespais.img} width="50%"></img>
            {
                productpais.map(pro =>(
                    <ul key={pro.id}>
                        <li>{pro.nombre}</li>
                    </ul>
                ))
            }
        </div>
    )
}