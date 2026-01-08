import { useState } from 'react'

export const InputsApp = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (event) =>{
        setNombre(event.target.value)   
    }
    
    const handleChangeEmail = (event) =>{
        setEmail(event.target.value)   
    }
    const onSubmit = () => {

    }
  return (
    <div>
        <h1>Inputs controlados</h1>
        <hr />
        <p>React es controlador y quiere saber en todo momento que pasa con su estado</p>
        <p>Un input controlado es aquel que está asociado a un estado, de manera que, si cambia el estado, cambia el contenido del input y si cambia el contenido de un input, cambia el estado</p>
        <hr />
        <h2>El nombre es: {nombre}</h2>
        <h2>El email es: {email}</h2>
        <form>
            <div>
                <label htmlFor="">Nombre</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={nombre}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    onChange={handleChangeEmail}
                    value={email}
                />
            </div>
            <button onClick={onSubmit}>aceptar</button>
        </form>
    </div>
  )
}
 