import { useState } from "react";

export const UseStateApp = () =>{
    //parte de lógica
    
    console.log("Llamada a base de datos");
    
    let [numero, setNumero] = useState(4000);
    let [nombre, setNombre] = useState("Santi");


    const sumar = () =>{
        setNumero(numero + 1);
    }

    const reset = () =>{
        setNumero(4000);
    }

    const restar = () =>{
        setNumero( numero -1 );
    }

    const cambiarNombre = (string) =>{
        setNombre(string)
    }


    return(
        // parte de renderización
        <>
            <h1>Lección 4: Estado y useState</h1>
            <hr />
            <h2>Estado de la aplicación:</h2>
            <p>Es la información que maneja una appplicación en un momento determinado del tiempo</p>
            <h3>Los componentes también pueden tener estados</h3>
            <hr />
            <h2>Hooks</h2>
            <p>Son funciones que nos provee React para manejar el estado de la aplicación y de los componentes</p>
            <h2>Normas de los hooks:</h2>
            <p>1.- todos empiezan por "use"</p>
            <p>2.- solamente se puede usar en componentes de tipo functional</p>
            <p>3.- tienen que ser llamados a nivel superior de un componente (siempre dentro de un componente)</p>
            <p>nunca pueden estar dentro de bucles o condicionales</p>
            <hr />
            <h2>1er hook: useState. Sirve para manejar variables de estado.</h2>
            <p>El cambio de una variable de estado(useState) provoca la re-renderización del componente que lo contiene y de sus hijos</p>
            <h1>EL ESTADO ES INMUTABLE: no podemos cambiar directamente el estado, tiene que ser a través de su seteo </h1>
            <p>React utiliza la programación declarativa frente a la imperativa que es la que hemos usado hasta ahora</p>
            <hr />
            <p>Numero: {numero}</p>
            <button onClick={sumar}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={restar}>-1</button>
            <hr />
            <h2>Nombre: {nombre}</h2>
            <button onClick={()=>cambiarNombre("Ana")}>Cambiar Ana</button>
            <button onClick={()=>{cambiarNombre("Maria")}}>Cambiar Maria</button>
        </>
    )
}
