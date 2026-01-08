import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'

export const NavbarReactBoots = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/productos'>Productos</Nav.Link>
            <Nav.Link as={NavLink} to='/novedades'>Novedades</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}