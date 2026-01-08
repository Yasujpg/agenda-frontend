import { useState } from "react";
import "./cambiaNombre.css";

export const ChangeName = () => {
  const [name, setName] = useState("Yasu");
  const [newName, setNewName] = useState("");
  const [Editing, setEditing] = useState(false);

  const startEditing = () => {
    setNewName(name);
    setEditing(true);
  };

  const accept = () => {
    setName(newName);
    setEditing(false);
  };

  const cancel = () => {
    setEditing(false);
  };


  return(
    <div className="pic-container">
      <h2>{name}</h2>
  )
  
{/* aqui me pierdo */}

  <button onClick={accept}>Aaceptar</button>
  <button onClick={cancel}>cancelar</button>

  </div>