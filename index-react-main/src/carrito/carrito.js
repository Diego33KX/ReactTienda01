import React, {useContext} from "react"
import * as BiIcons from "react-icons/bi";
import { DataContext } from "../Context/dataProvider";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const Carrito = () =>{
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    function handlePay(){
        console.log("El pago fue exitoso");
        window.location.href = "http://localhost:3000/"
    }
    const createOrder=(data, actions)=> {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: total,
              },
            },
          ],
        });
      }
    const  onApprove=(data, actions)=> {
        return actions.order.capture(handlePay());
      }  

    const tooglefalse = () => {
        setMenu(false);
    };

    const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
    console.log(show1)

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item => {
            if(item.id === id){
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }


    const removeProducto = id => {
        if(window.confirm("¿Desea suspender el producto?")){
            
            carrito.forEach((item,index)=>{
                if(item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index,1)
                }
            })
            setCarrito([...carrito])
        }
        
    }
    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close">
                    <BiIcons.BiX className="icon1"  onClick={tooglefalse}/>
                </div>
                <h2 className="py-3">Su carrito</h2>
                <div className="carrito__center">
                {
                    
                    carrito.length === 0 ? <h2 style={{
                        textAlign: "center", fontSize: "3rem"
                    }}>Carrito Vacio</h2>:<>
                    {
                    carrito.map((producto)=>(
                    
                        <div className="carrito_item" key={producto.id}>
                            <img src={producto.img_delante} alt=""></img>
                            <div>
                                <h3>{producto.nombre}</h3>
                                <p className="price">s/. {producto.precio}</p>
                            </div>
                            <div>
                                <BiIcons.BiUpArrow className="icon2" onClick={()=>suma(producto.id)}/>
                                
                                <p className="cantidad">{producto.cantidad}</p>
                                <BiIcons.BiDownArrow className="icon2" onClick={()=>resta(producto.id)}/>
                                
                            </div>
                            <div className="remove__item" onClick={()=>removeProducto(producto.id)}>
                                <BiIcons.BiEraser className="icon4"/>
                            </div>
                        </div>
                    ))
                    }
                </>
                }
                </div>
                <div className="carrito__footer">
                    <h3>Total: s/. {total}</h3>
                    
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                    
                </div>
                <div>
                
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}