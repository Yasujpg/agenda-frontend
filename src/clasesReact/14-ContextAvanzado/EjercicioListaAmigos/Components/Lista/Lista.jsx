import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { FriendsContext } from '../../../../../context/FriendsContext'

export const Lista = () => {
  
    const {listaAmigos} = useContext(FriendsContext)
  
  return (
    <Table striped bordered hover>
      <thead> 
        <tr>
          <td>numero</td>
          <td>nombre</td>
          <td>apellidos</td>
        </tr>
        
      </thead>
      <tbody>
       
        {listaAmigos?.map((e,id)=>{
            return(
                <tr key={id}>
                    <td>{id+1}</td>
                    <td>{e.nombre}</td>
                    <td>{e.apellido}</td>
                </tr>
            )
        })}
      </tbody>
    </Table>
  )
}