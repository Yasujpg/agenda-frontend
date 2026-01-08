import React, { useState } from 'react'

import { Button } from 'react-bootstrap'
import { ModalBasico } from './Components/ModalBasico'
import { Formulario } from './Components/Formulario';

export const ModalApp = () => {
    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

  return (
    <div>
          <h1>Uso de un modal básico</h1>
        <hr />
        <Button onClick={openModal}>Register</Button>
        <ModalBasico show={show} handleClose={closeModal}>
            {/* <Formulario /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis dolore velit, neque ut et ad impedit vitae laborum nam doloribus optio, temporibus officia voluptates at asperiores. Voluptatibus, modi veniam.</p>
        </ModalBasico>
    </div>
  )
}