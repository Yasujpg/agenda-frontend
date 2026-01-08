import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { NavbarApp } from "../components/NavbarApp";

import axios from "axios";

//carga perezosa lazyLoad
//el componente que queramos cargar con lazydebe estar exportado por default

//importación perezosa
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const Productos = lazy(() => import("../pages/Productos/Productos"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const UserWall = lazy(() => import("../pages/UserWall/UserWall"));
const AdminPage = lazy(() => import("../pages/AdminPage/AdminPage"));

export const AppRoutes = () => {
  const [panes, setPanes] = useState();
  const [user, setUser] = useState();

  console.log("usuario logueado", user);

  //useEffect que mira si hay token en el localsorage (quiere decir que había alguien logueado)
  //y en el caso de que de lo haya, me traido el usuario
  
  useEffect(() => {
    let tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      const fetchData = async () => {
        try {
          let resUser = await axios
                    .get('http://localhost:4000/api/getOneUser', {headers:{Authorization: `bearer ${tokenLocal}`}});
          setUser(resUser.data.user)
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();

    }
  }, []);


const logOut = ()=>{
    setUser();
    localStorage.removeItem("token");
}


  useEffect(() => {
    //pedir el array de panes al back
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/panes");
        // console.log(res.data);
        setPanes(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <NavbarApp user={user} logOut={logOut}/>
      <Suspense
        fallback={
          <div>
            <h1>Cargando....</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos" element={<Productos panes={panes} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* //protección y autorización de rutas */}
          {user && user.type === 0 && <Route path="/wall" element={< UserWall/>} />}
          {user && user.type === 1 && <Route path="/admin" element={<AdminPage />} />}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};