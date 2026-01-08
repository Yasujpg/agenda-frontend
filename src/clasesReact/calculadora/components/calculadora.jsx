import { useState } from "react";

import "./calculadora.css";

export const Calculadora = () => {

  /* guardamos numeros metidos */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  /* guardar la operacion que hemos clicado */
  const [operacion, setOperacion] = useState("");

  /* para mostrar resultado */
  const [resultado, setResultado] = useState(0);

  const calcular = () => {

    if (!num1 || !num2) return; /* si estan vacion volvemos atras */

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    /* variable para guardar resultado */
    let res = 0;

    switch (operacion) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "x":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;

      default:
        res = 0;
    }

    setResultado(res);
  };

   const erase = () => {
    setNum1("");
    setNum2("");
    
    setResultado(0);
   };

  return (
    <div className="calc-container">
      <h1>Calculadora</h1>

      <div className="inputs">
        <input
          type="number"
          value={num1}
        />

        <span>{operacion || "+"}</span>

        <input
          type="number"
          value={num2}
        />
      </div>

      <div className="operations-buttons">
        <button onClick={() => setOperacion("+")}>+</button>
        <button onClick={() => setOperacion("-")}>-</button>
        <button onClick={() => setOperacion("x")}>x</button>
        <button onClick={() => setOperacion("/")}>÷</button>
      </div>

      <button className="calc-btn" onClick={calcular}>
        Calcular
      </button>
      <button className="erase-btn" onClick={erase}>
        C
      </button>

      <h3>Resultado: {resultado}</h3>
    </div>
  );
};
