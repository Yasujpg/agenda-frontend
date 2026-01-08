import { useState } from "react";
import "./Minions.css";

export function Minion(props) {


  //hay qu ever que datos llegan
  console.log("props recibidas:", props); 

  const [nombre, setName] = useState(props.name);
  const [mostrarInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState("");


  return(
    <div className="minion-card">
      <h2>{nombre}</h2>

      <img src={props.img} alt= {nombre} />
    
    {!mostrarInput && (
      <button className="btn-change" onClick={() => setShowInput(true)}>
        cambiar nombre
      </button>

    )}

    {mostrarInput && (

      <div className="input-box">

        <input
        type="text"
        placeholder="nuevo nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        />

        <button
        className="btn-accept"
        onClick={() => {
          setName(newName);
          setNewName("");
          setShowInput(false);
        }}>

         Aceptar 
         </button>
      </div>

    )}
    </div>

  );

};