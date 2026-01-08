import { useParams } from "react-router";

export const ProductoPage = () => {
  const {nombre} = useParams();

  return (
    <div>
      <h2>Producto seleccionado: {nombre}</h2>
    </div>
  )
}