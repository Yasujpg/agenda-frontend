import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export const BreadCard = ({ bread }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`/images/${bread.image}`} />
    <Card.Body>
      <Card.Title>{bread.name}</Card.Title>
      <Card.Text>
        Precio: {bread.price} €
      </Card.Text>
      <Button
        variant="primary"
        onClick={() => navigate(`/products/${bread.id}`)}>
          Ver Mas
        </Button>
    </Card.Body>
    </Card>
  )
}