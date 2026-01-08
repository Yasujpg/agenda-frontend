import { useContext, useState } from 'react'

import { InmoContext } from '../../../../context/InmoContext';

const initialValue = {
    direccion:"",
    numDor:"",
    pvp:""
}

export const Formulario = () => {
    const [newHouse, setNewHouse] = useState(initialValue);

    const {setHouse} = useContext(InmoContext);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setNewHouse({...newHouse, [name]:value})
    }

    const submit = (e) =>{
        e.preventDefault();
        setHouse(newHouse)
        setNewHouse(initialValue)
    }

  return (
        <form >
            <h2>Formulario</h2>
            <div>
                <label htmlFor="">Dirección</label>
                <input 
                    type="text" 
                    value={newHouse.direccion}
                    onChange={handleChange}
                    name='direccion'
                />
            </div>
            <div>
                <label htmlFor="">Número de dormitorios</label>
                <input 
                    type="text" 
                    value={newHouse.numDor}
                    onChange={handleChange}
                    name='numDor'
                />
            </div>
            <div>
                <label htmlFor="">Pvp</label>
                <input 
                    type="text" 
                    value={newHouse.pvp}
                    onChange={handleChange}
                    name='pvp'
                />
            </div>
            <button onClick={submit}>aceptar</button>
        </form>
  )
}