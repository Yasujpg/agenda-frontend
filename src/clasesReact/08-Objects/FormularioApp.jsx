import { useState } from 'react'

export const FormularioApp = () => {
    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        email: ""
    });

    const handleChange = (event) =>{
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }
   

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("he mandado un json de user", JSON.stringify(user));
        
    }

    // let mascota = {
    //     nombre: "micro",
    //     raza: "caniche toy",
    //     edad: 10
    // }


    // //manejo dinámico de las propiedades de un objeto
    // let prop = "raza"
    // mascota[prop] = 12


// console.log("mmmmmmmmmasscota",mascota);

  return (
    <div>
        <h1>Formulario creación usuario</h1>
        <hr />
        <form>
            <div>
                <label htmlFor="">Nombre</label>
                <input 
                    type="text"
                    onChange={handleChange}
                    name="nombre"
                    value={user.nombre}
                />
            </div>
            <div>
                <label htmlFor="">Apellidos</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name='apellidos'
                    value={user.apellidos}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name='email'
                    value={user.email}
                />
            </div>
            <button onClick={onSubmit}>Aceptar</button>
        </form>
    </div>
  )
}