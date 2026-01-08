import React, { useState } from 'react'
import { Hija } from './components/Hija'
import './style.css'

export const EjerConDist = () => {
  const [contador, setContador] = useState(0);

  const restar = ()=>setContador(contador - 1);
  const reset = ()=>setContador(0);
  const sumar = ()=>setContador(contador + 1);

  return (
    <div>
        <h1>Ejercicio contador a distancia</h1>
        <hr />
        <h2>Contador: {contador}</h2>
        < Hija 
          sumar={sumar}
          restar={restar}
          reset={reset} 
          contador={contador}        
        />
    
    </div>
  )
}