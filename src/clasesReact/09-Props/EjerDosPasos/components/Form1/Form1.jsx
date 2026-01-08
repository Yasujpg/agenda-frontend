import React from 'react'
import './form.css'
import { MiBoton } from '../MiBoton/MiBoton'

export const Form1 = ({
                    setCurrentForm, 
                    userInput,
                    handleChange,
                    cancel
                }) => {
  return (
    <div className='form-ppal'>
        <h2>Formulario</h2>
        <h3>paso 1 de 2</h3>
        <form>
            <div>
                <label htmlFor="">Nombre</label>
                <input 
                    type="text" 
                    value={userInput.name}
                    onChange={handleChange}
                    name='name'
                    />
            </div>
            <div>
                <label htmlFor="">Apellidos</label>
                <input 
                    type="text" 
                    value={userInput.lastname}
                    onChange={handleChange}
                    name='lastname'
                />
            </div>
            <div className='d-flex gap-2 pt-2'>
                <MiBoton 
                    texto="Siguiente" 
                    onSubmit={()=>setCurrentForm(2)}
                />
                <MiBoton 
                    texto="Cancelar"
                    onSubmit={cancel}
                />
            </div>
        </form>
    </div>
  )
}