import React from 'react'
import { useOutletContext } from 'react-router'

export const Electronica = () => {
    const {nombre} = useOutletContext();

  return (
    <div>Electronica {nombre}</div>
  )
}