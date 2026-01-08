import React from 'react'
import './miboton.css'
export const MiBoton = ({texto, onSubmit, disabled}) => {
  return (
    <button 
        className='mi-boton'
        onClick={onSubmit}
        disabled={disabled}
    >{texto}</button>
  )
}