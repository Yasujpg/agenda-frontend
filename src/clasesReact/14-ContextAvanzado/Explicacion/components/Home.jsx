import React from 'react'
import { Formulario } from './Formulario'
import { CardInfo } from './CardInfo'

export const Home = () => {
  return (
    <div>
        <h1>Bienvenid@s a mi página</h1>
        <hr />
        <div className='d-flex justify-content-around'>
            <Formulario />
            <CardInfo />
        </div>
    </div>
  )
}