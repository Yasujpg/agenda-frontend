import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'

export const HomePage = ({user}) => {
  const navigate = useNavigate();

  useEffect(()=>{
    let prueba = localStorage.getItem("prueba");
    console.log("prueba del local", prueba);
    if(prueba){
      navigate('/about')
    }
    
  }, [])

  
  const submit = () =>{
    console.log("hola");
    //navegación programática
    navigate('/about')
  }

  return (
    <div>
      <h1>Vienvenid@s a nuestra web</h1>
      <h2>nombre: {user.nombre}</h2>
      <Link to='/productos'>ir a productos</Link>
      <Link to='https://www.google.com'>ir a google</Link>

      <Button onClick={submit} >ir a About</Button>
    </div>
  )
}