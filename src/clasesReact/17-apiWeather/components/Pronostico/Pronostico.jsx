import React from 'react'
import { CardApp } from '../CardApp/CardApp';

export const Pronostico = ({forecast}) => {
  console.log("dddaata filtrada", forecast);
  
  return (
    <div className='d-flex gap-3'>
      {forecast?.map(elem=>{
        return(
          <CardApp key={elem.dt} elem={elem} />
        )
      })}
    </div>
  )
}