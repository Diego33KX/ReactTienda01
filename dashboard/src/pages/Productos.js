import React, { Component, useContext } from "react"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import { DataContext } from "../context/Dataprovider";
const url = "http://127.0.0.1:8000/productos/"
const url2 = "http://127.0.0.1:8000/categorias/"
const url3 = "http://127.0.0.1:8000/paises/";


class Producto extends Component{
    static context = DataContext
    state = {
        data:[],
        data2:[],
        data3:[],
        modalInsertar: false,
        modalEliminar:false,
        form:{
            id:'',
            nombre:'',
            categoria:'',
            pais:'',
            precio:'',
            stock:'',
            marca:'',
            talla:'',
            genero:'',
            img_delante:'',
            img_atras:'',
            cantidad:'',
            descripcion:'',
            pub_date:'',
            tipoModal:''
        }
    }
    
    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
      }
    peticionGetCategorias=()=>{
        axios.get(url2).then(response =>{
            this.setState({data2:response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }
    peticionGetPaises=()=>{
      axios.get(url3).then(response =>{
          this.setState({data3:response.data});
      }).catch(error=>{
          console.log(error.message);
      })
  }
    componentDidMount(){
    this.peticionGet();
    this.peticionGetCategorias();
    this.peticionGetPaises();
    }
    peticionPost=async()=>{
        delete this.state.form.id;
        await axios.post(url,this.state.form).then(response=>{
          this.modalInsertar();
          this.peticionGet();
        }).catch(error=>{
          console.log(error.message);
        })
      }
    peticionPut=()=>{
        axios.put(url+this.state.form.id+'/', this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
          })
    } 
      
    modalInsertar = () =>{
        this.setState({modalInsertar: !this.state.modalInsertar});
    }
    handleChange = async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
            });
        console.log(this.state.form);
    }

    peticionDelete=()=>{
        axios.delete(url+this.state.form.id).then(response=>{
          this.setState({modalEliminar: false});
          this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
          })
      }
      
    seleccionarProducto=(producto)=>{
    this.setState({
        tipoModal: 'actualizar',
        form:{
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            pais:producto.pais,
            precio:producto.precio,
            stock:producto.stock,
            marca:producto.marca,
            talla:producto.talla,
            genero:producto.genero,
            img_delante:producto.img_delante,
            img_atras:producto.img_atras,
            cantidad:producto.cantidad,
            descripcion:producto.descripcion,
            pub_date:producto.pub_date
        }
    })
    }
    
    render(){
        console.log(this.state)
        let value = this.context
        const addCarrito = value.addCarrito;
        const {form} = this.state;
        return(
            <div className="container">
                <br></br>
                <button className='btn btn-primary' onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
                <h1></h1>
                <table className="table">
                    <thead className="table-primary">
                    <tr>
                        
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Marca</th>
                        <th>Talla</th>
                        <th>Genero</th>
                        <th>Img1</th>
                        
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                        {this.state.data.map(producto =>{
                            return(
                            <tr>
                                
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.talla}</td>
                                <td>{producto.genero}</td>
                                <td><img src={producto.img_delante} width="100px"></img></td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>{this.seleccionarProducto(producto); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>{"   "}
                                    <button className="btn btn-danger" onClick={()=>{this.seleccionarProducto(producto); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    <button className="btn btn-warning" onClick={() => this.addCarrito(producto.id)}>Add</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            <Modal isOpen={this.state.modalInsertar} className="modal-dialog-scrollable">
              <ModalHeader style={{display:'block'}} className="bg-info">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                    <button type="button" class="btn-close" onClick={()=>this.modalInsertar()}></button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className='form-group'>
                    <input className='form-control' type='hidden' name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id:this.state.data.length+1}></input>
                    <br></br>
                    <label htmlFor='nombre'>Nombre</label>
                    <input className='form-control' type='text' name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''} required></input>
                    <br></br>
                    <label htmlFor='categoria'>Categoria</label>
                    <select className="form-select" aria-label="Default select example" name="categoria" id="categoria" onChange={this.handleChange} value={form?form.categoria:''} required>
                      <option selected>Seleccione la categoria</option>
                      {this.state.data2.map(categoria=>{
                          return(
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                          )
                      })}
                        
                    </select>
                    <br></br>
                    <label htmlFor='pais'>Pais</label>
                    <select className="form-select" aria-label="Defaul select example" name="pais" id="pais" onChange={this.handleChange} value={form?form.pais:''} required>
                      <option selected>Seleccione el pais</option>
                      {this.state.data3.map(paises=>{
                        return(
                          <option key={paises.id} value={paises.id}>{paises.nombre}</option>
                        )
                      })}
                    </select>
                    <br></br>
                    <label htmlFor='precio'>Precio</label>
                    <input className='form-control' type='text' name="precio" id="precio" onChange={this.handleChange} value={form?form.precio:''} required></input>
                    <br></br>
                    <label htmlFor='stock'>Stock</label>
                    <input className='form-control' type='text' name="stock" id="stock" onChange={this.handleChange} value={form?form.stock:''} required></input>
                    <br></br>
                    <label htmlFor='marca'>Marca</label>
                    <input className='form-control' type='text' name="marca" id="marca" onChange={this.handleChange} value={form?form.marca:''} required></input>
                    <br></br>
                    <label htmlFor='talla'>Talla</label>
                    <input className='form-control' type='text' name="talla" id="talla" onChange={this.handleChange} value={form?form.talla:''} required></input>
                    <br></br>
                    <label htmlFor='genero'>Genero</label>
                    <input className='form-control' type='text' name="genero" id="genero" onChange={this.handleChange} value={form?form.genero:''} required></input>
                    <br></br>
                    <label htmlFor='img_delante'>Img Delante</label>
                    <input className='form-control' type='url' placeholder="https://imagen.jpg" name="img_delante" id="img_delante" onChange={this.handleChange} value={form?form.img_delante:''} required></input>
                    <br></br>
                    <label htmlFor='img_atras'>Img Atras</label>
                    <input className='form-control' type='url' placeholder="https://imagen.jpg" name="img_atras" id="img_atras" onChange={this.handleChange} value={form?form.img_atras:''} required></input>
                    <br></br>
                    <label htmlFor='img_costado'>Cantidad</label>
                    <input className='form-control' type='number' name="cantidad" id="cantidad" onChange={this.handleChange} value={form?form.cantidad:''} required></input>
                    <br></br>
                    <label htmlFor='descripcion'>Descripcion</label>
                    <textarea className='form-control' type='text' name="descripcion" id="descripcion" onChange={this.handleChange} value={form?form.descripcion:''} required></textarea>
                    <br></br>
                    <label htmlFor='pub_date'>Fecha de registro</label>
                    <input className='form-control' type='text' name="pub_date" id="pub_date" onChange={this.handleChange} value={form?form.pub_date:''}></input>
                </div>

              </ModalBody>

              <ModalFooter className="bg-info">
              {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: 
                  <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
              </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar al producto {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
        </Modal>
        </div>
        )
    }
}
export default Producto