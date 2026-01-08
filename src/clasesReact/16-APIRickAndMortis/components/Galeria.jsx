import React from 'react'
import { Minicard } from './Minicard'

export const Galeria = ({data, setSelectedCharacter, updateGallery}) => {

    console.log(data);
       
  return (
    <div className='d-flex flex-wrap gap-2 justify-content-center m-5'>
        {data?.info.prev && <p onClick={()=>updateGallery(data.info.prev)}>Ver anterior</p>}
        {data?.results.map(e=>{
            return(
                <Minicard 
                    key={e.id}
                    elem = {e} 
                    setSelectedCharacter={setSelectedCharacter}
                />
            )
        })}   
        {data?.info.next && <p onClick={()=>updateGallery(data.info.next)}>Ver siguiente</p>}
    </div>
  )
}