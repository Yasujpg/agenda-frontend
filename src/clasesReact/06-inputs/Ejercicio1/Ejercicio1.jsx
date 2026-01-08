import React, { useState } from 'react'
import './ejer.css'
export const Ejercicio1 = () => {
    const [texto, setTexto] = useState("");
    const [textoFinal, setTextoFinal] = useState("");
    const [color, setColor] = useState("verde");
    const [claseColor, setClaseColor] = useState("verde");
    const [showMessage, setShowMessage] = useState(false);

    
    const handleChange = (event) =>{
        setTexto(event.target.value)
    }

    const escribir = (e) =>{
        e.preventDefault();
        setTextoFinal(texto)
    }

    const limpiar = (event) =>{
        //evita que refresque cuando está dentro de un formulario
        event.preventDefault();
        setTexto("");
        setTextoFinal("");
    }

    const handleChangeColor = (e) =>{
        setColor(e.target.value)
    }

    const cambiarFondo = () =>{
        let textoEnMunis = color.toLowerCase();
        if(textoEnMunis === "amarillo" || 
           textoEnMunis === "azul" ||
           textoEnMunis === "rojo" || 
           textoEnMunis === "verde"){
            setClaseColor(textoEnMunis);
            setShowMessage(false);
           }else{
            setShowMessage(true);
           }
    }

  return (
    <div>
        <h1>Ejercicio1</h1>
        <div className='eje-ppal'>
            <div className='div-sec'>
                <h2>formulario</h2>
                <form>
                    <input 
                        type="text" 
                        onChange={handleChange}
                        placeholder='Introduce un texto'
                        value={texto}
                    />
                    <div>
                        <button 
                            onClick={escribir}
                            disabled={!texto}
                        >escribir</button>
                        <button 
                            onClick={limpiar}
                            disabled={!texto}
                        >limpiar</button>
                    </div>
                </form>
            </div>
            <div className='div-sec'>
                <h2>Texto</h2>
               <h3>{textoFinal}</h3>
            </div>
        </div>
        <div className={`parte2 ${claseColor}`}>
            <h2>Elige entre verde, azul, amarillo y rojo</h2>
            <input 
                type="text"
                onChange={handleChangeColor}
                value={color}
             />
            <button onClick={cambiarFondo}>Cambiar color</button>
            {showMessage && <h3>El color no es permitido</h3>}
        </div>
    </div>

  )
}