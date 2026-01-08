import { Button, Card } from "react-bootstrap";


export const PanCard = ({elem}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
          {elem.name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};