
import { useEffect, useState } from 'react';

import {Button} from 'react-bootstrap'
import { Info } from './components/Info'
import { Galeria } from './components/Galeria'
import axios from 'axios';


export const RickAnDMortiApp = () => {
    const [data, setData] =  useState();
    const [selectedCharacter, setSelectedCharacter] = useState();

    useEffect(()=>{
        const pedir = async ()=>{
            try {
                let res = await axios.get('https://rickandmortyapi.com/api/character/');
                setData(res.data);
                setSelectedCharacter(res.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        }
        pedir();
    }, [])


    const updateGallery = async(url) =>{
        try {
            let res = await axios.get(url);
            setData(res.data);
            setSelectedCharacter(res.data.results[0]);
            
        } catch (error) {
            console.log(error);
        }
    }


    // console.log("data", data);
    // console.log("selected", selectedCharacter);
    
  return (
    <div>
        <h1>Aplicación rick and Morty</h1>
        <hr />
        <div className='d-flex justify-content-around'>
            <div>
                <Info selectedCharacter={selectedCharacter} />
            </div>
            <div className='d-flex flex-column gap-2'>
                <Button>personajes</Button>
                <Button>localizaciones</Button>
                <Button>Episodios</Button>
            </div>

        </div>
        <div>
            <Galeria 
                data={data} 
                updateGallery={updateGallery}
                setSelectedCharacter={setSelectedCharacter} 
            />
        </div>
    </div>
  )
}