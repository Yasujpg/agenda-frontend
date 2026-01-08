import React from 'react'
import { MiBoton } from '../MiBoton/MiBoton'

import './navbar.css'

export const NavbarApp = ({
    setCurrentForm, 
    registered, 
    openEdit,
    userRegistered
  }) => {
  return (
    <header>
      <nav className='d-flex justify-content-end gap-2'>
        <div className='image'>
          {!registered && <img src={`/images/ejerRegistro/bob.webp`} alt="" />}
          {registered && <img src={`/images/ejerRegistro/${userRegistered.avatar?userRegistered.avatar:'bob.webp'}`} alt="" />}
        </div>
        {!registered && <MiBoton 
          texto="Registrar"
          onSubmit={()=>setCurrentForm(1)}
        />}
        {registered && <MiBoton 
          texto="Editar"
          onSubmit={openEdit}
        />}
        <MiBoton 
          texto="Info"
          onSubmit={()=>setCurrentForm(3)}
          disabled={!registered}
        />
      </nav>
    </header>
  )
}