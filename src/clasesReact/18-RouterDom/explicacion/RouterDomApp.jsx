import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ProductosPage } from './pages/ProductosPage/ProductosPage'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { NavbarReactBoots } from './components/NavbarReactBoots/NavbarReactBoots'
import { ProductoPage } from './pages/ProductoPage/ProductoPage'
import { useState } from 'react'
import { NovedadesPage } from './pages/NovedadesPage/NovedadesPage'
import { Navidad } from './pages/Navidad/Navidad'
import { Alimentacion } from './pages/Alimentacion/Alimentacion'
import { Electronica } from './pages/Electronica/Electronica'
// import { NavbarClasico } from './components/NavbarClasico/NavbarClasico'

export const RouterDomApp = () => {
  const [user, setUser] = useState({nombre: "pepe", apellido: "patata"})


  return (
      <BrowserRouter>
        {/* <NavbarClasico /> */}
        <NavbarReactBoots />
        <Routes>
            <Route path='/' element={<HomePage user={user}/>}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/productos' element={<ProductosPage />}/>
            <Route path='/producto/:nombre' element={< ProductoPage/>} />

            <Route path='/novedades' element={<NovedadesPage />} >
                <Route index element={<Navidad />}/>
                <Route path='alimentacion' element={<Alimentacion />}/>
                <Route path='electronica' element={<Electronica />}/>
            </Route>

            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}