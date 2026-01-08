import React, { useState } from 'react'
import { Nieta } from './Nieta'

export const Hija = ({sumar, restar, reset, contador}) => {
  
  const [showNieta, setShowNieta] = useState(false);

  const abrirCerrar = () => setShowNieta(!showNieta);
  
  return (
    <div className='cont-div'>
        <h2>Hija</h2>
        <button onClick={abrirCerrar}>{showNieta?'cerrar':'abrir'}</button>
        
        {showNieta && < Nieta 
                        sumar={sumar}
                        restar={restar}
                        reset={reset} 
                        contador={contador} 
                      />}
    </div>
  )
}