import React from 'react'
import { MiBoton } from '../MiBoton/MiBoton'

export const Info = ({ userRegistered, setCurrentForm}) => {
  return (
    <div className='form-ppal'>
        <h2>Información</h2>
        <h3>del usuario</h3>

        <p>Nombre: {userRegistered.name}</p>
        <p>Apellidos: {userRegistered.lastname}</p>
        <p>Dirección: {userRegistered.address}</p>
        <p>Ciudad: {userRegistered.city}</p>
        <div className='d-flex gap-2'>
            <MiBoton texto="Cerrar" onSubmit={()=>setCurrentForm(0)}/>
        </div>
    </div>
  )
}