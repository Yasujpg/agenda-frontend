import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import axios from 'axios'

const initialValue = {
  email:"",
  password:""
}


const Login = ({setUser}) => {
  const [login, setLogin] = useState(initialValue);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setLogin({...login, [name]: value})
  }

  const onSubmit = async() =>{
    try {
     let resToken = await axios.post('http://localhost:4000/api/login', login);
     localStorage.setItem("token", resToken.data.token);
     let token = resToken.data.token;
     console.log(token);
     
    //cuando llega el token vamos a pedir al back que nos traiga la info del usuario del token
    let resUser = await axios
                      .get('http://localhost:4000/api/getOneUser', {headers: {Authorization:`bearer ${token}`}});

      setUser(resUser.data.user);
      navigate('/');
    
    } catch (error) {
      console.log(error);
      setMessage("Credenciales incorrectas")
      
    }
  }
   
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-25 p-4">
        <h2>Formulario de login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email" 
            value={login.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            value={login.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <p>No estás registrado? <Link to='/register'>Register</Link> aqui</p>
        <p>{message}</p>
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

export default Login;