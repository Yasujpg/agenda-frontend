import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      navigate('/products');
      }
    }, []);

    return(
      <div>
        <h1>Panaderia</h1>
        <p>Bienvenido </p>
        <Link to="/products">Ver Producos</Link>
      </div>
    );
};