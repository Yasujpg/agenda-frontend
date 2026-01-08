import React from 'react'
import { Link } from 'react-router'

export const ProductosPage = () => {
  return (
    <div>
      <h2>Productos</h2> 
      <hr />
      <div className='d-flex flex-column gap-2'>
        <Link to='/producto/milhojas_merengue'>Ir a producto1: Milhoja de merengue</Link>
        <Link to='/producto/tarta_choco'>Ir a producto1: tarta chocolate</Link>
      </div>
    </div>
  )
}