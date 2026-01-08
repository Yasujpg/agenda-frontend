import React, { useEffect, useState } from 'react'

import './ejerPixar.css'
import { PelisFav } from './components/PelisFav';

const fotos = [
    {
        id:1,
        name: "toy-Story",
        file:"01.jpg"
    },
    {
        id:2,
        name: "bichos",
        file:"02.jpg"
    },
    {
        id:3,
        name: "Toy-story 2",
        file:"03.jpg"
    },
    {
        id:4,
        name: "Mounstros S.A.",
        file:"04.jpg"
    },
    {
        id:5,
        name: "Nemo",
        file:"05.jpg"
    },
    {
        id:6,
        name: "Los increibles",
        file:"06.jpg"
    },
    {
        id:7,
        name: "Cars",
        file:"07.jpg"
    },
    {
        id:8,
        name: "Ratatouille",
        file:"08.jpg"
    },
    
];

export const EjerPixar = () => {
    const [fav, setFav] = useState([]);

    useEffect(()=>{
        let  pelisFavoritas = localStorage.getItem("pelisFav");
        let arrayFinal = JSON.parse(pelisFavoritas)
        setFav(arrayFinal);
    }, [])

    

    const addMovie = (peli) =>{
        //añadir una peli
        if(fav.length < 3){
            let newFavs = [...fav, peli]
            setFav(newFavs)
            localStorage.setItem("pelisFav", JSON.stringify(newFavs));
        }
    }



  return (
    <div>
        <h1>EjerPixar</h1>
        <hr />
        <div className='d-flex flex-wrap gap-2'>
            {fotos.map((e) => {
              return(
                  <div key={e.id} className='foto'>
                    <img src={`/images/pixar/${e.file}`} alt="" />
                    <button onClick={()=>addMovie(e)}>add</button>
                  </div>
              )

            })}
        </div> 
        <h2>Tus 3 pelis favoritas son:</h2>
        <PelisFav fav={fav} />
    </div>
  )
}