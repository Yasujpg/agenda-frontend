import { useState } from "react";
import "./tablaBotones.css";

export const TablaBotones = () => {

  /* para que se muestre o no la tabla */
  const [open, setOpen] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [nombreInput, setNombreInput] = useState("");


  const addCliente = () => {

    /* si el input esta vaci que no ponga nada */
    if (nombreInput.trim() === "") return;


    /* crear un nuevo cliente */
    const nuevo = {
      id: clientes.length + 1,
      nombre: nombreInput,
    };

    setClientes([...clientes, nuevo]);
    setNombreInput("");
  };


  const deleteCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };


  function mostrarTabla() {
    if (!open) return null;

    return (
      <div>
        <h2 className="titulo-dos">Tabla de clientes</h2>

        <div className="input-selection">
          <input
            type="text"
            placeholder="escribe un nombre"
            value={nombreInput}
            onChange={(e) => setNombreInput(e.target.value)}/>

          <button className="btn-add" onClick={addCliente}>
            Anadir Cliente
          </button>
        </div>

        <table className="tabla-clients">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>
                  <button
                    className="btn-borrar"
                    onClick={() => deleteCliente(cliente.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


  return (
    <div className="tabla-container">

      <h1 className="titulo-principal">Tabla con Botones</h1>

      <button className="btn-abrir" onClick={() => setOpen(!open)}>
        {open ? "Cerrar" : "Abrir"}
      </button>

      {mostrarTabla()}
    </div>
  );
};