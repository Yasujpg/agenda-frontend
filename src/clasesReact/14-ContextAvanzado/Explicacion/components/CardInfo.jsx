import { useContext } from 'react'
import { InmoContext } from '../../../../context/InmoContext'

export const CardInfo = () => {
    const {house} = useContext(InmoContext)
  return (
   <div>
        <h2>Información</h2>
        <p>dirección:{house?.direccion}</p>
        <p>numero dormitorios:{house?.numDor}</p>
        <p>pvp:{house?.pvp}</p>
    </div>
  )
}