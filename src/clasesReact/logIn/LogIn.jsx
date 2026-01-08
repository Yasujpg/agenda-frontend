import React, { useEffect, useState } from "react";

const invalidate = {
    name: "",
    surname: "",
    email: "",
    password: ""
};

export const FormLoginApp = () => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState(invalidate);
    const [userFinal, setUserFinal] = useState({});
    const [boton, setBoton] = useState('Login');

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (savedUser) {
            setUserFinal(savedUser);
            setBoton('Logout');
        }
    }, []);

    const openModal = () => {
        if (boton === "Login") {
            setShow(true);
        } else {
            localStorage.removeItem("user");
            setUserFinal({});
            setBoton('Login');
        }
    };

    //bloqueo con modales. 
};