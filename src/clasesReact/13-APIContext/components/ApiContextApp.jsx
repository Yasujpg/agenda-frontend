import React, { useState } from 'react'
import { Hijo1 } from './components/Hijo1'
import { Hijo2 } from './components/Hijo2'

import DataContext from '../../context/DataContext'

import './styles.css'

const users = [
    {id:1, nombre:"Pepa"},
    {id:2, nombre:"Maria"},
]

export const ApiContextApp = () => {
    const [user, setUser] = useState(users[0]);
    
  return (
    <div className='ppal'>
    

        <h1>ApiContextApp</h1>
        <p>1º crear un contexto</p>
        <p>2º proveer de datos al contexto</p>
        <p>3º consumir contexto gracias al hook useConext</p>
        <button onClick={()=>setUser(users[0])}>cambia a user 1</button>
        <button onClick={()=>setUser(users[1])}>cambia a user 2</button>
        <div className='d-flex justify-content-center gap-4'>

            <DataContext.Provider value={ user }>
                < Hijo1 />
                < Hijo2 />
            </DataContext.Provider>

        </div>
    
    </div>
  )
}