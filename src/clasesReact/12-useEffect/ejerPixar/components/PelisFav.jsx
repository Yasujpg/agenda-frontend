import React from 'react'

export const PelisFav = ({fav}) => {
  return (
    <div className='d-flex gap-3'>
        {fav.map(e=>{
            return(
                <div key={e.id} className='foto'>
                    <img src={`/images/pixar/${e.file}`} alt="" />
                    <button>borrar</button>
                </div>
            )
        })}
    </div>
  )
}