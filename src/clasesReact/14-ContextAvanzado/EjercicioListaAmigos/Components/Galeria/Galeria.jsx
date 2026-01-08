import React, { useContext } from 'react'
import { FriendsContext } from '../../../../../context/FriendsContext'
import { CardApp } from '../CardApp/CardApp'

export const Galeria = () => {

    const {listaAmigos} = useContext(FriendsContext)

  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {listaAmigos?.map((e,idx)=>{
            return(
                <CardApp key={idx} data={e} />
            )
        })}
    </div>
  )
}