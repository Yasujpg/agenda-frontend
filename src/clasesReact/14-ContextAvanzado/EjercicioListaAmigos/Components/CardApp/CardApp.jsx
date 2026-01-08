import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CardApp = ({data}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/minions/${data.img}`} />
      <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>
            {data.apellido}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}