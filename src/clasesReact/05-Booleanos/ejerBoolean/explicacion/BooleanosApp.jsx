import { useState } from 'react'
import './booleanApp.css'

let nombres = ["Ana", "Juan"]


export const BooleanosApp = () =>{

    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(true);
    const [bool3, setBool3] = useState(true);
    const [bool4, setBool4] = useState(true);
    
    const [nombre, setNombre] = useState(nombres[0]);


    // console.log("bbooll4", bool4);
    
    const cambiarTrue = () => setBool1(true);
    const cambiarFalse = () => setBool1(false);

    const cambiarBool2 = () =>{
        // if(bool2=== true){
        //     setBool2(false)
        // }else{
        //     setBool2(true)
        // }
        // bool2 === true?setBool2(false):setBool2(true);
        // bool2?setBool2(false):setBool2(true);

        setBool2(!bool2);
    }

    const cambiarBool3 = () =>{
        setBool3(!bool3);
    }

    const cambiarBool4 = () =>{
        let temp = bool4;
        console.log("antes", temp);
        
        temp = !temp;
        
        setBool4(temp);

        console.log("despues", temp);
        
        if(temp === true) {
            setNombre(nombres[0])
        }else{
            setNombre(nombres[1])
        }
    }

    return(
        <>
            <h1>useState con booleanos y renderización condicional</h1>
            <hr />

            <div className="bool-cont">
                <div className="card">
                    <h4>Cambiar un estado booleano</h4>
                    <p>El valor de bool1 es: {bool1?"true":"false"}</p>
                    <div>
                        <button onClick={()=>setBool1(true)}>cambiar a true</button>
                        <button onClick={()=>setBool1(false)}>cambiar a false</button>
                    </div>
                    <div>
                        <button onClick={cambiarTrue}>cambiar a true</button>
                        <button onClick={cambiarFalse}>cambiar a false</button>
                    </div>
                </div>

                <div className="card">
                    <h4>Cambiar un estado booleano con un solo boton</h4>
                    <p>El valor de bool2 es: {bool2?"true":"false"}</p>
                    <div>
                        <button onClick={cambiarBool2}>cambiar bool2</button>
                    </div>                    
                </div>

                <div className="card">
                    <h4>ver una foto u otra en función de un estado booleano con un solo boton</h4>
                    {/* <img src={`/images/varias/${bool3?"lisa":"bart"}.jpg`} alt="" /> */}
                    {/* {bool3 ? 
                        <img src="/images/varias/bart.jpg" alt="" />
                        :
                        <img src="/images/varias/lisa.jpg" alt="" />
                    } */}
                    <img src={bool3? "/images/varias/bart.jpg":"/images/varias/lisa.jpg"} alt="" />
                    
                    <div>
                        <button onClick={cambiarBool3}>cambiar a {bool3?"Lisa":"Bart"}</button>
                    </div>                    
                </div>


                <div className="card">
                    <h2>Nombre: {nombre}</h2>
                    <div>
                        <button onClick={cambiarBool4}>cambiar bool4</button>
                    </div>                    
                </div>
            </div>
           
        </>
    )
}
