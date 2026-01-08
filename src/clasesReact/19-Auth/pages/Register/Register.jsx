import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

import axios from "axios";

const initialValue = {
  name:"",
  lastname:"",
  email:"",
  password:""
}

const Register = () => {
    const [newUser, setNewUser] = useState(initialValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const {name, value} = e.target;
      setNewUser({...newUser, [name]: value})
    }   

    const onSubmit = async() =>{
        //1.- mandar los datos al back
        try {
          const res = await axios.post('http://localhost:4000/api/register', newUser);
          console.log(res);
          
        } catch (error) {
          console.log(error);
        }
      //cerrar formulario
        navigate('/login');
    }


  return (
    <div className="d-flex justify-content-center">
      <Form className="w-25 p-4">
        <h2>Registro</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter lastname" 
            name="lastname"
            value={newUser.lastname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email" 
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </Form.Group>
        <p>Ya estás registrado? <Link to='/login'>login</Link> aqui</p>
        <Button 
          variant="primary" 
          onClick={onSubmit}
        >
          Submit
        </Button>
        <Button onClick={()=>navigate('/')}>Cancelar</Button>
      </Form>
    </div>
  );
};

export default Register;