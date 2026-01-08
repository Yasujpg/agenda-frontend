import React from 'react'

export const Info = ({selectedCharacter}) => {
    // console.log("2222222222222", selectedCharacter);
    
  return (
    <div>
        <h3>{selectedCharacter?.name}</h3>
        <img src={selectedCharacter?.image} alt="" />
    </div>
  )
}