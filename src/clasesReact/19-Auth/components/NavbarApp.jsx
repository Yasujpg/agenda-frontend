import React from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router'

export const NavbarApp = ({user, logOut}) => {
  const navigate = useNavigate();

  const onLogOut = () =>{
    logOut();
    navigate("/");
  }

  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" >About</Nav.Link>
            <Nav.Link as={NavLink} to="/productos" >Productos</Nav.Link>
            {user && user.type===0 && <Nav.Link as={NavLink} to="/wall" >Muro</Nav.Link>}
            {user && user.type===1 && <Nav.Link as={NavLink} to="/admin" >Administrador</Nav.Link>}
          </Nav>
          
          {!user ? <div className='d-flex gap-2'>
            <Button 
              variant='info'
              onClick={()=>navigate('/register')}
            >Register</Button>

            <Button 
              variant='info'
              onClick={()=>navigate('/login')}
            >Login</Button>
          </div>
          :
          <div className='d-flex gap-2'>
            <p>{user.name}</p>

             <Button 
              variant='info'
              onClick={onLogOut}
            >LogOut</Button> 
          </div>
          }
        </Container>
      </Navbar>
  )
}