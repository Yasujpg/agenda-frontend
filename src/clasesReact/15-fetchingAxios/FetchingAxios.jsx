import axios from 'axios';
import { useState } from 'react';

const initialValue = {
    pet_name:"",
    specie:"",
    breed:""
}

export const FetchingAxios = () => {

    const [newPet, setNewPet] = useState(initialValue);
    const [pictures, setPictures] = useState();

    const pedirData = async() =>{
        console.log("aaa");
        
        try {
            let result = await axios.get('http://localhost:4000/api/pets');
            console.log("rreeesss", result.data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        
        if(name === "avatar"){
            setPictures(e.target.files)
        }else{
            setNewPet({...newPet, [name]:value})
        }
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        try {

            //cuando hay archivos, multer necesita enctipe multipart/formdata
            //el formdata lo montamos a mano

            //crear una instancia (un contenedor de información) de la clase FormData
            const newFormData = new FormData();

            //aqui añado los datos tipo text del formulario
            newFormData.append("mascota", JSON.stringify(newPet));


            //añado los archivos que están dentro de pictures
            if(pictures){
                for(const pic of pictures){
                    newFormData.append("img", pic)
                }
            }

            let res = await axios.post("http://localhost:4000/api/newPet", newFormData);
            console.log(res);
            
        } catch (error) {
            console.log(error);
                        
        }
    }



  return (
    <div>
        <h1>FetchingAxios</h1>
        <p>Axios es una librería asincrona que trabaja bajo fetch con promesas</p>
        <button onClick={pedirData}>pedir datos</button>

        <form className='d-flex flex-column w-25 gap-3'>
            <h1>Nueva mascota</h1>
            <input 
                type="text" 
                name='pet_name'
                placeholder='nombre'
                value={newPet.pet_name}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name='specie'
                placeholder='especie'
                value={newPet.specie}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name='breed'
                placeholder='raza'
                value={newPet.breed}
                onChange={handleChange}
            />
            <input 
                type="file" 
                name='avatar'
                onChange={handleChange}
            />
            <button onClick={onSubmit}>mandar</button>
        </form>
    </div>
  )
}