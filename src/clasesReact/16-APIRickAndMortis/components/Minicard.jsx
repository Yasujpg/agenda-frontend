import React from 'react'
import './minicard.css'

export const Minicard = ({elem, setSelectedCharacter}) => {

  const selectCharacter = () =>{
    setSelectedCharacter(elem)
  }

  return (
    <div className='mini'>
      <p>{elem.name}</p>
      <img src={elem.image} alt="" />
      <button onClick={selectCharacter}>Ver mas</button>
    </div>
  )
}