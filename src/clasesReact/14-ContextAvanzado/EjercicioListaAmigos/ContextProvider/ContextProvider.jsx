import { useEffect, useState } from "react"
import { FriendsContext } from "../../../../context/FriendsContext"

export const ContextProvider = ({children}) => {
    const [listaAmigos, setListaAmigos] = useState();
    console.log("lista en el context", listaAmigos);

    useEffect(()=>{
      let listaLocal = localStorage.getItem("lista")
      if(listaLocal){
        setListaAmigos(JSON.parse(listaLocal));
      }

    },[])
    


 return (
    <FriendsContext.Provider value={{listaAmigos, setListaAmigos}}>
        {children}
    </FriendsContext.Provider>
  )
}