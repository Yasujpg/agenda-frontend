import { useState } from "react";
import "./Ejercicio3.css";


export const Ejercicio3 = () => {

  const [seleccionado, setSeleccionado] = useState(null);
  const [tiradas, setTiradas] = useState(0);
  const [numRandom, setNumRandom] = useState(null);
  const [text, setText] = useState("");

    return (

        <div className="bingo-app">

            <h1>BingoApp</h1>

            <div className="numeros-container">

              <button onClick={() => setSeleccionado(0)} >0</button>
              <button onClick={() => setSeleccionado(1)}>1</button>
              <button onClick={() => setSeleccionado(2)}>2</button>
              <button onClick={() => setSeleccionado(3)}>3</button>
              <button onClick={() => setSeleccionado(4)}>4</button>
              <button onClick={() => setSeleccionado(5)}>5</button>
              <button onClick={() => setSeleccionado(6)}>6</button>
              <button onClick={() => setSeleccionado(7)}>7</button>
              <button onClick={() => setSeleccionado(8)}>8</button>
              <button onClick={() => setSeleccionado(9)}>9</button>

            </div>

            <p>Numero seleccionado: {seleccionado} </p>
            <p>Numero de tiradas: {tiradas}</p>

            <button className="btn-generarNumero"
            onClick={() => {
              const num = parseInt(Math.random() * 10);
              setNumRandom(num);
              setTiradas(tiradas + 1);

              if (num === seleccionado){
                setText("Has ganado solo has necesitado " + (tiradas + 1) + "intentos!")
              }
            }}>
              Generar numero 
            </button>

             <br>
             </br>
            <button className="btn-reset">
              Reset
            </button>

        </div>

    );
};
