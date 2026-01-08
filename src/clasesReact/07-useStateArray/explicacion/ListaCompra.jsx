import { useState } from 'react'

import './lista.css'

export const ListaCompra = () => {
  const [producto, setProducto] = useState("");
  const [lista, setLista] = useState([]);
  const [search, setSearch] = useState("");
  const [listaFiltrados, setListaFiltrados] = useState([]);
  
  const [addMessage, setAddMessage] = useState("");
  
  const handleChange = (event) => {
    // let value = event.target.value;
    // setProducto(value)
    setProducto(event.target.value)
  }

  const handleChangeSearch = (e) =>{
    setSearch(e.target.value)
  }
  
  const addProducto = (event) =>{
    event.preventDefault(); 
    //añadir el producto en la lista
    //INMUTABLE!!!!!!!
    //spread operator ...
    if(producto){
          setLista([...lista, producto]);
          setProducto("");
          if(addMessage){
            setAddMessage("");
          }
    }else{
      console.log("es obligatorio un producto");
      setAddMessage("Tienes que meter un producto")
    }
  }

  const delLastProduct = (e) =>{
    e.preventDefault();
    //crear un array temporal, hacer un pop y luego setear
    // let temp = [...lista]
    // temp.pop();
    // setLista(temp)

    //usar slice
    // setLista(lista.slice(0, lista.length-1))
    setLista(lista.slice(0, -1))
    
  }
  
  const reset = () =>{
    setLista([]);
  }
   
  console.log("**********", lista);
  
  const searchProducts = (e) =>{
    e.preventDefault();
    if(search === ""){
      setListaFiltrados([]);
    }else{
      let newArray = lista.filter((elem)=> elem.includes(search));
      setListaFiltrados(newArray)      
    }
  }

  return (
    <>
      <h1>Lista de la compra</h1>
      <div className='lista-cont'>
        <div className='form-lista'>
          <h2>Ve añadiendo productos</h2>
          
          <form action="">
            <input 
              type="text" 
              onChange={handleChange}
              value={producto}
            />
            <p style={{color:"red"}}>{addMessage}</p>
            <button onClick={addProducto}>Añadir producto</button>
          </form>
          <button onClick={reset}>Reset compra</button>
          <button onClick={delLastProduct}>Borrar último producto</button>
          <hr />
          <hr />
          <h2>Buscar Productos</h2>
          <form>
            <input 
              type="text" 
              value={search}
              onChange={handleChangeSearch}
            />
            <button onClick={searchProducts}>Buscar</button>
          </form>
          <h3>resultado de la búsqueda</h3>
          <ol>
            {listaFiltrados.map((elem, id)=>{
              return(
                <li key={id}>{elem}</li>
              )
            })}
          </ol>

        </div>
        <div className='lista'>
          <h2>Lista de la compra</h2>
          <hr />
          <ol>
            {lista.map((elem, id)=>{
              return(
                <li key={id}>{elem}</li>
              )
            })}
          </ol>
          
        </div>
      
      </div>
    </>
  )
}