import React from "react";
import { MiBoton } from "../MiBoton/MiBoton";

export const Form2 = ({ 
                setCurrentForm,
                userInput,
                handleChange,
                cancel,
                submit
}) => {

  return (
    <div className="form-ppal">
      <h2>Formulario</h2>
      <h3>paso 2 de 2</h3>
      <form>
        <div className="d-flex flex-column">
          <label htmlFor="">Dirección</label>
          <input 
            type="text" 
            name="address"
            onChange={handleChange}
            value={userInput.address}
            />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="">Ciudad</label>
          <input 
            type="text" 
            name="city"
            onChange={handleChange}
            value={userInput.city}
          />
        </div>
        <div>
          <label htmlFor="foto2">Avatar</label>
          <input 
            type="file" 
            id="foto2"
            name="avatar" 
            hidden 
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-2 pt-2">
          <MiBoton texto="Anterior" onSubmit={() => setCurrentForm(1)} />
          <MiBoton texto="Cancelar" onSubmit={cancel}/>
        </div>
        <div className="mt-2">
          <MiBoton onSubmit={submit} texto="Aceptar" />
        </div>
      </form>
    </div>
  );
};