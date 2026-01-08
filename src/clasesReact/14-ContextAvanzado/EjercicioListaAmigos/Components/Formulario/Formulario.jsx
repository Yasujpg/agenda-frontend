import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { FriendsContext } from '../../../../../context/FriendsContext';
const initialValue = {
    nombre: "",
    apellido: "",
    img:""
}

export const Formulario = () => {
    const [friend, setFriend] = useState(initialValue);

    const {listaAmigos, setListaAmigos} = useContext(FriendsContext)

    const handleChange = (e) =>{
        
        const {name, value} = e.target;
        if(name === "img"){
            setFriend({...friend, [name]: e.target.files[0].name})
        }else{
            setFriend({...friend, [name]:value})
        }
    }

   
    const onSubmit = () =>{
        if(!listaAmigos){
            setListaAmigos([friend]);
            localStorage.setItem("lista", JSON.stringify([friend]))
          }else{
            setListaAmigos([...listaAmigos, friend]);
            localStorage.setItem("lista", JSON.stringify([...listaAmigos, friend]))
        }

        setFriend(initialValue)
    }

  return (
   <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>nombre</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter name"
            onChange={handleChange}
            value={friend.nombre}
            name="nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>apellido</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter lastname"
            onChange={handleChange}
            value={friend.apellido}
            name="apellido"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFile">
         <Form.Label>Sube una imagen</Form.Label>
         <Form.Control 
            type="file" 
            onChange={handleChange}
            name="img"
        />
      </Form.Group>

      <Button 
        variant="primary" 
        onClick={onSubmit}
    >
        Submit
      </Button>
    </Form>
  )
}
