import { Home } from './Components/Home/Home'
import { ContextProvider } from './ContextProvider/ContextProvider'
import { Container } from 'react-bootstrap'

export const EjercicioListaAmigos = () => {
  return (
    <ContextProvider>
        <Container fluid>
            <Home />
        </Container>
    </ContextProvider>
  )
}
