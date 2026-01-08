import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Formulario } from './components/Formulario/Formulario';
import { Pronostico } from './components/Pronostico/Pronostico';
import { Grafica } from './components/Grafica/Grafica';
import { Loading } from './components/loading/Loading';



export const ApiWheather = () => {
    const [forecast, setForecast] = useState();
    const [isLoading, setIsLoading] = useState(false);

  
    return (

    <Container fluid>
        <Row>
            <Col md={3}>
                <Formulario 
                    setForecast={setForecast} 
                    setIsLoading={setIsLoading}
                />
            </Col>
            {isLoading ? <>
                <Loading />
                <p>Cargando...</p>
            </>:
            <Col md={9}>
                <Pronostico forecast={forecast} />
            </Col>
            }
        </Row>
        <Row>
            <Col>
                {forecast && <Grafica forecast={forecast} />}
            </Col>
        </Row>
    </Container>
  )
}