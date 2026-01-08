import React from 'react'
import { CardFruta } from '../../Components/CardFruta/CardFruta';

export const ListaFrutas = ({dataFrutas}) => {
  
  return (
    <div>
      <h1>nuestros productos</h1>
      <hr />
      <div className='d-flex flex-wrap gap-3'>

      {dataFrutas?.map(elem=>{
        return(
          <CardFruta key={elem.id} elem={elem}/>
        )
      })}
      </div>
    </div>
  )
}