import { useState } from "react"
import './ejer1.css'

export const Ejercicio1 = () =>{

    const [texto, setTexto] = useState("");
    const [theme, setTheme] = useState("claro");
    const [color, setColor] = useState("rojo")

    const mostrarTexto = () =>{
        setTexto("este es mi texto")
    }

    const ocultarTexto = () =>{
        setTexto("");
    }

    const aclarar = () =>{
        setTheme("claro");
    }

    const oscurecer = () => {
        setTheme("oscuro")
    }

    const cambiarColor = (valor) =>{
        setColor(valor)
    }

    return(
        <div className={`ejer1-ppal ${theme}`}>
            <h1>Ejercicio1</h1>
            <hr />
            <h2>Texto: {texto} </h2>
            <hr />
            <h2>Theme: {theme}</h2>
            <div>
                <button onClick={mostrarTexto}>Mostrar</button>
                <button onClick={ocultarTexto}>Ocultar</button>
                <button onClick={aclarar}>Claro</button>
                <button onClick={oscurecer}>Oscuro</button>
            </div>
            <div className={`div-2 ${color}`}>
                <button onClick={()=>cambiarColor("rojo")}>rojo</button>
                <button onClick={()=>cambiarColor("verde")}>verde</button>
            </div>
        
        </div>
    )
}