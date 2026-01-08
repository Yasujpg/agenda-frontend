import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router'

export const NovedadesPage = () => {
    const [nombre, setNombre] = useState("Pepa")

    const navigate = useNavigate();

  return (
    <div>
        <h2>Novedades de la empresa</h2>
        <div>
            <Button onClick={()=>navigate('/novedades')}>ver Navidad</Button>
            <Button onClick={()=>navigate('/novedades/alimentacion')}>ver Alimentación</Button>
            <Button onClick={()=>navigate('/novedades/electronica')}>ver Electrónica</Button>
        </div>
        <Outlet context={{nombre}}/>
    </div>
  )
}