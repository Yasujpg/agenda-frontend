import React, { useState } from 'react'
import luna from './assets/iconos/luna.png'
import sol from './assets/iconos/sol.png'
import { Galeria } from './components/Galeria'
import './ejerBool.css'

export const EjerBoolean = () => {
  console.log("me pinto cuando renderizo el padre");
  
  const [showGallery, setShowGallery] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <div className={`galeria-ppal ${theme?'oscuro':"claro"} `}>
      <nav>
        <h1>EjerBoolean</h1>
          <div 
            className='cont-icono'
            onClick={()=>setTheme(!theme)}
          >
            <img src={theme?sol:luna} alt="" />
          </div>
        </nav>
      <button onClick={()=>setShowGallery(!showGallery)}>{showGallery?"Cerrar":"Abrir"} galeria</button>
      {showGallery && <Galeria />}
    </div>
  )
}