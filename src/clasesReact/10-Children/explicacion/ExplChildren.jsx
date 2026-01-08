import React from 'react'
import { Cartel } from './Components/Cartel'
import { Button } from 'react-bootstrap'
import { ButtonPersonal } from './Components/ButtonPersonal/ButtonPersonal'

export const ExplChildren = () => {
    
  return (
    <div>
        <h1>Props children</h1>
        <p>Son unas props especiales que valen para pasar jsx de padres a hijos</p>
        <div className='d-flex justify-content-around'>
            <Cartel title="anuncio1">
                <div>
                    <div style={{width:"50px", height:"50px", backgroundColor: "red"}}></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus provident, excepturi fuga esse dolorum impedit a voluptatibus saepe nulla nobis doloribus illo amet numquam nesciunt qui commodi ullam! Consectetur!</p>
                </div>
            </Cartel>
            <Cartel title="anuncio2">
                <img style={{width: "150px"}} src="/images/minions/stuart.webp" alt="" />
            </Cartel>
            
        </div>
        <div>
            <ButtonPersonal>Aceptar</ButtonPersonal>
        </div>
    </div>
  )
}