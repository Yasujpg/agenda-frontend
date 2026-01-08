
import React, { useEffect, useState } from 'react'
import './useEffect.css'
import { Hijo } from './Hijo';

const userdb = {name: "Santi", email: "s@s.com"}

export const Explicacion = () => {
  const [theme, setTheme] =  useState("");
  const [num, setNum] = useState(0);
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  
  
  useEffect(()=>{
    setUser(userdb);
  },[])

  useEffect(()=>{
    let themeDelLocal = localStorage.getItem("theme")
    setTheme(themeDelLocal)
  }, [])
  

  const aclarar = () => {
    setTheme("");
    localStorage.setItem("theme", "");
  }
  const oscurecer = () => {
    setTheme("oscuro");
    localStorage.setItem("theme", "oscuro");
  }

  return (
    <div className={`ppal ${theme}`}>
      <h1>hook useEffect</h1>
      <hr />
      <p>1.- todos empiezan por "use"</p>
      <p>2.- solamente en componentes de tipo funcional</p>
      <p>3.- solamente llamados en nivel superior de un componente</p>
      <hr />
      <h2>useEffect</h2>
      <p>es un hook que nos permite manejar estado en función de la fase del ciclo de vida del componente en el cual nos encontramos </p>
      <p>useEffect es una función que recibe dos argumentos; un callback y un array de dependencias</p>
      <hr />
      <h3>Ciclo de vida de un componente</h3>
      <p>1.- montaje</p>
      <p>2.- actualización</p>
      <p>3.- desmontaje</p>
      <hr />
      <button onClick={aclarar}>Modo claro</button>
      <button onClick={oscurecer}>Modo oscuro</button>
      <h2>numero: {num}</h2>
      <h3>usuario: {user?.nombre}</h3>
      <button onClick={()=>setNum(num+1)}>+1</button>
      <button onClick={()=>setUser("Maria")}>cambio de usuario</button>
      <hr />
      <button onClick={()=>setShow(!show)}>Abrir/cerrar</button>
      {show && <Hijo />}
    </div>
  )
}