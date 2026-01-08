import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Formulario } from '../Formulario/Formulario'
import { Lista } from '../Lista/Lista'
import { Galeria } from '../Galeria/Galeria'

export const Home = () => {
  return (
    <>
        <header><h1>Lista de amigos</h1></header>
        <main>
            <Row>
                <Col md={2}>
                <Formulario />
                </Col>
                <Col md={10}>
                    <Lista />
                </Col>
            </Row>
            <Row>
                <Col>
                   <Galeria />
                </Col>
            </Row>
        </main>
        <footer></footer>
    </>
  )
}