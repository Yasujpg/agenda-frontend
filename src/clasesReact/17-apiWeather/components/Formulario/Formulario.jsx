import axios from 'axios';
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const apiKey = "fea4e10893e2dfaa205a2269eeca82a8"

export const Formulario = ({setForecast, setIsLoading}) => {
  const [city, setCity] = useState("");
  const [msgErr, setMsgErr] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value)
  }


  const prepararData = (arr) =>{
        //calcular la hora del primier elemento del array
        let horaAbuscar = arr[0].dt_txt.split(" ")[1];
        let pronosticoProx5Dias = arr.filter(e=>e.dt_txt.includes(horaAbuscar))
    
        return pronosticoProx5Dias
    }

  
    const pedirPronostico = async (ciudad) =>{
        
        if(ciudad){   
            setIsLoading(true)
            try {
                let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/?q=${ciudad}&units=metric&appid=${apiKey}`)
                console.log(res); 
                setMsgErr("");
                setCity("");
                let dataFiltrada = prepararData(res.data.list)
                setForecast(dataFiltrada)
                setIsLoading(false)

            } catch (error) {
                if(error.response?.data.message === "city not found"){
                    console.log("la ciudad no existe");
                    setMsgErr("la ciudad no existe")
                  }else{
                    console.log(error);
                    setMsgErr("ups, hay algún problema, intentalo más tarde!")
                  }
            }
        }else{
          setMsgErr("el campo no puede estar sin cumplimentar")
        }
    }



  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter city" 
          onChange={handleChange}
          value={city}
        />
      </Form.Group>
      <p style={{color: "red"}}>{msgErr}</p>
      <Button 
        variant="primary"
        onClick={()=>pedirPronostico(city)}
      >
        Buscar
      </Button>
    </Form>
  )
}