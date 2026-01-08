import React from 'react'

export const Cartel = ({title, children}) => {
    
  return (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
  )
}