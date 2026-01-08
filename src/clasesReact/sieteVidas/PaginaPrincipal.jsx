import { useState } from "react";
import EditarPerfil from "./EditarPerfil";
import "./Paginaprincipal.css";

export default function PaginaPrincipal() {

  const [mostrarForm, setShowForm] = useState(false);

  return (
    <div className="pagina-container">
      <div className="top-right">
        <button className="btn-completar" onClick={() setShowForm(true)}>
          Edita Perfil
        </button>
      </div>
    </div>
  )