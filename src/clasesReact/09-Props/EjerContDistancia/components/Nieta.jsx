import React from 'react'

export const Nieta = ({
    restar, 
    sumar, 
    reset,
    contador
  }) => {
 
  return (
    <div className='cont-div'>
        <h3>Nieta</h3>
        <h4>Contador: {contador}</h4>
        <div>
          <button onClick={restar}>-</button>
          <button onClick={reset}>reset</button>
          <button onClick={sumar}>+</button>
        </div>
    </div>
  )
}

