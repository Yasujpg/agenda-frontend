import { useState } from "react";


export const RepasoApp = () =>{



   const [usuario, setUsuario] = useState("Manolo")
  

    //funciones void: hacen cosas (ejecutan funciones dentro) pero no retornan nada
    const cambiarNombre = () =>{
       console.log("lalal");       
    }


    //quiero una función que manipule un texto, lo ponga todo en mayúscula y delante le añada "hola"
    //análisis de actividad
    const manipularTexto = (texto) =>{
        let res = texto.toUppeCase();
        res= "hola" + res;
        return res
    }
    



    console.log(cambiarNombre());
    



    return (
        <div>
            <h1>Repaso</h1>
            <hr />
            <h2>nombre es {usuario}</h2>
            <button onClick={cambiarNombre}>Cambiar nombre</button>
        </div>
    )
}