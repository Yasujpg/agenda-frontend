import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export const CardFruta = ({elem}) => {
  const navigate = useNavigate();
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/fruits/${elem.image}`} />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
          Kcal: {elem.kcal}
        </Card.Text>
        <Button 
          variant="primary"
          onClick={()=> navigate(`/infoFruta/${elem.id}`)}
        >ver {elem.name}</Button>
      </Card.Body>
    </Card>
  )
}