import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router'

export const InfoFruta = ({dataFrutas}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  let selectdFruta = dataFrutas?.find(e=>e.id===Number(id));

   return (
    <div>
      <h3>InfoFruta de {selectdFruta?.name}</h3> 
      <img src={`/images/fruits/${selectdFruta?.image}`} alt="" />
      <p>kcal: {selectdFruta?.kcal}</p> 
      <div>
        <Button onClick={()=>navigate('/lista')}>volver1</Button>
        <Button onClick={()=>navigate(-1)}>volver2</Button>
      </div>
    </div>
    
  )
}