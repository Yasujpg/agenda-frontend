import { useState } from 'react'
import { fruits } from '../../../data/frutas'
console.log(fruits);
import './array.css'

export const ExplicacionMapeo = () => {
    const [nombres, setNombres] = useState(["Ana", "Maria", "Jose", "Paco", "Ana"]);

  return (
    <>
    <div>
        <h1>Mapear array</h1>
        <hr />
        <ul>
            {nombres.map((elem, idx)=>{
                return (
                    <li key={idx}>{elem}</li> 
                )
            })}
        </ul>
    
    </div>
    <div className='cont-frut'>

            {fruits.map((elem)=>{
                return(
                     <div className='card' key={elem.id}>
                        <h3>{elem.name}</h3>
                        <img src={`/images/fruits/${elem.image}`} alt="" />
                        <h3>kcal: {elem.kcal}</h3>
                     </div>
                )
            })}

        
    </div>
    </>
  )
}