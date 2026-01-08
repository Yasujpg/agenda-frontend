import React, { useState } from 'react'
import { InmoContext } from '../../../../context/InmoContext'

export const ContextProvider = ({children}) => {

  const [house, setHouse] = useState();

  console.log("valor global de house", house);
  

  return (
    <InmoContext.Provider value={{house, setHouse}}>
      {children}
    </InmoContext.Provider>

  )
}
