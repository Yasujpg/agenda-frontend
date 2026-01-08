import React, { useState } from 'react'
import { NavbarApp } from './components/NavbarApp/NavbarApp'
import { Form1 } from './components/Form1/Form1'
import { Form2 } from './components/Form2/Form2'
import { Info } from './components/Info/Info'

const initialValue = {
  name:"",
  lastname:"",
  address:"",
  city:"",
  avatar:""
}

export const EjerPerfilDosPasos = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [userInput, setUserInput] = useState(initialValue);

  const [userRegistered, setUserRegistered] = useState();
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    if(name!=="avatar"){
      setUserInput({...userInput, [name]:value})
    }else{
      setUserInput({...userInput, avatar:e.target.files[0].name})
    }
  }

console.log("Usuario registrado", userRegistered);

  const openEdit = () =>{
    setUserInput(userRegistered);
    setCurrentForm(1);
  }

  const cancel = (e) =>{
    e.preventDefault();
    setUserInput(initialValue);
    setCurrentForm(0);
  } 

  const submit = (e) =>{
    e.preventDefault();
    setUserRegistered(userInput);
    setCurrentForm(0);
    setRegistered(true);
  }

  return (
    <div>
        <NavbarApp 
          setCurrentForm={setCurrentForm}
          registered={registered}
          openEdit={openEdit}
          userRegistered={userRegistered}
        />
        <div className=' d-flex flex-column align-items-center p-5'>
          {currentForm === 1 && <Form1 
                                  setCurrentForm={setCurrentForm}
                                  userInput={userInput}
                                  handleChange={handleChange}
                                  cancel={cancel}  
                                  />
                                }
          {currentForm === 2 && <Form2 
                                  setCurrentForm={setCurrentForm}
                                  userInput={userInput}
                                  handleChange={handleChange}  
                                  cancel={cancel} 
                                  submit={submit} 
                                />}    
          {currentForm === 3 && <Info 
                                  userRegistered={userRegistered} 
                                  setCurrentForm={setCurrentForm}
                                />}
        </div>
    
    </div>
  )
}