import { useState } from "react"
import fotoInv from '../../../assets/ejerEstaciones/winter.jpg'
import fotoPrim from '../../../assets/ejerEstaciones/spring.jpg'
import fotoVer from '../../../assets/ejerEstaciones/summer.jpg'
import fotoOto from '../../../assets/ejerEstaciones/autumn.jpg'

export const Ejercicio2 = ()=>{

    const [season, setSeason] = useState("spring");
    const [season2, setSeason2] = useState(fotoInv);
    const [season3, setSeason3] = useState("winter");

    const cambiarFoto = (foto) =>{
        setSeason(foto);
    }
    const cambiarFoto2 = (foto) =>{
        setSeason2(foto);
    }
    const cambiarFoto3 = (numero) =>{
        if(numero === 1){
            setSeason3("winter")
        }else if(numero === 2){
            setSeason3("sprint")
        }else if(numero === 3){
            setSeason3("summer")
        }else if(numero === 4){
            setSeason3("autumn")
        }
    }

return(
    <>
        <h1>Ejercicio Estaciones version public</h1>
        <div>
            <button onClick={()=>cambiarFoto("winter")}>Invierno</button>
            <button onClick={()=>cambiarFoto("spring")}>Primavera</button>
            <button onClick={()=>cambiarFoto("summer")}>Verano</button>
            <button onClick={()=>cambiarFoto("autumn")}>Otoño</button>
        </div>
        <img src={`/images/estaciones/${season}.jpg`} alt="" />
        <hr />
        <h1>Ejercicio Estaciones version importación fotos</h1>
        <div>
            <button onClick={()=>cambiarFoto2(fotoInv)}>Invierno</button>
            <button onClick={()=>cambiarFoto2(fotoPrim)}>Primavera</button>
            <button onClick={()=>cambiarFoto2(fotoVer)}>Verano</button>
            <button onClick={()=>cambiarFoto2(fotoOto)}>Otoño</button>
        </div>
         <img src={season2} alt="" />
        <hr />
        <h1>Ejercicio Estaciones version condicionales a un numero</h1>
        <div>
            <button onClick={()=>cambiarFoto3(1)}>Invierno</button>
            <button onClick={()=>cambiarFoto3(2)}>Primavera</button>
            <button onClick={()=>cambiarFoto3(3)}>Verano</button>
            <button onClick={()=>cambiarFoto3(4)}>Otoño</button>
        </div>
         <img src={`/images/estaciones/${season3}.jpg`} alt="" />
    </>
)
}