import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NavbarApp } from './Components/NavbarApp/NavbarApp'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ListaFrutas } from './pages/ListaFrutas/ListaFrutas'

import { fruits } from '../../../data/frutas'
import { ErorPage } from './pages/ErrorPage/ErorPage'
import { InfoFruta } from './pages/InfoFruta/InfoFruta'

export const WebFrutas = () => {

    const [dataFrutas, setDataFrutas] = useState();

    //simulacro de llamada a base de datos o a api
    useEffect(()=>{
        setDataFrutas(fruits);
    }, [])


  return (
    <BrowserRouter>
        <header>
            <NavbarApp />
        </header>
        <main>
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/lista' element={<ListaFrutas dataFrutas={dataFrutas}/>}/>
                    <Route path='/infoFruta/:id' element={<InfoFruta dataFrutas={dataFrutas}/>}/>
                    <Route path='*' element={<ErorPage />}/>
                </Routes>
            </Container>
        </main>
        <footer>

        </footer>
    </BrowserRouter>
  )
}