import React, { useState } from 'react'

export const LocalStorageApp = () => {

  const [nombre, setNombre] = useState("");
  const [nombreDelLocal, setNombreDelLocal] = useState();

  const handleChange = (e) => setNombre(e.target.value);


  //guardar el nombre en el LocalStorage
  const submit = (e) =>{
    e.preventDefault();
    localStorage.setItem("nombre", nombre);
  }

  const pedir = () =>{
    const resultDelLocal = localStorage.getItem("nombre");
    console.log("localStorage", resultDelLocal);
    setNombreDelLocal(resultDelLocal);
  }

  const borrar = () =>{
    localStorage.removeItem("nombre")
  }

  return (
    <div>
        <h1>LocalStorageApp</h1>
        <hr />
        <p>Siempre trabaja con strings; sólamente puedo guardar strings (strings, json y numero)</p>
        <h2>Nombre del localstorage: {nombreDelLocal}</h2>
        <form>
            <input 
                type="text" 
                value={nombre}
                onChange={handleChange}            
            />
            <button onClick={submit}>aceptar</button>
        </form>
        <button onClick={pedir}>pedir datos al localStorage</button>
        <button onClick={borrar}>borrar localStorage</button>
  
    </div>
  )
}