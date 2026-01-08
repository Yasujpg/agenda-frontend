import { useState } from "react";
import "./productosTienda.css";

/* ftos */
import arroz from "../assets/arroz1.jpg";
import lentejas from "../assets/lentejas1.jpg";
import lejia from "../assets/lejia1.jpg";
import tomate from "../assets/tomate1.jpg";
import elec1 from "../assets/elec1.jpg";
import elec2 from "../assets/elec2.jpg";

export const ProductosTienda = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [stock, setStock] = useState(true);
  const [productos, setProductos] = useState([]);

  const addProducto = () => {
    /* si falta un dato no tiene que anadir nada */
    if (!nombre.trim() || !categoria.trim() || !precio.trim() || !imagen.trim()) return;

    /* para los datos del formulario */
    const nuevo = {
      id: productos.length + 1,
      nombre,
      categoria,
      precio,
      imagen,
      stock,
    };

    /* para andir los producto al array */
    setProductos([...productos, nuevo]);

    setNombre("");
    setCategoria("");
    setPrecio("");
    setImagen("");
    setStock(true);
  };

  return (
    <div className="tienda-container">

      <h1>ProductosTienda</h1>

      <div className="form-box">
        <label>Nombre Producto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre Prodcuto"
        />

        <label>Categoria</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Alimentación">Alimentacion</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Electrodomesticos">Electrodomesticos</option>
        </select>

        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />

        <label>Imagen</label>
        <select value={imagen} onChange={(e) => setImagen(e.target.value)}>
          <option value="">Seleccione imagen</option>
          <option value={arroz}>Arroz</option>
          <option value={lentejas}>Lentejas</option>
          <option value={lejia}>Lejia</option>
          <option value={tomate}>Tomate</option>
          <option value={elec1}>Electrodomestico 1</option>
          <option value={elec2}>Electrodomestico 2</option>
        </select>

        <label className="stock-check">
          En stock
          <input
            type="checkbox"
            checked={stock}
            /* para cambiar el true y flase */
            onChange={() => setStock(!stock)}
          />
        </label>

        <button className="btn-add" onClick={addProducto}>
          Anadir
        </button>
      </div>

      {/* Pintar uan tarjeta por cada prodcuto */}
      <div className="productos-grid">
        {productos.map((prod) => (
          <div className="card-producto" key={prod.id}>

            {/* imagen de las cosas  */}
            <img src={prod.imagen} alt={prod.nombre} />

            <h3>{prod.nombre}</h3>
            <p>Pvp: {prod.precio} euros</p>

            <p className={prod.stock ? "stock-yes" : "stock-no"}>
              {prod.stock ? "En stock" : "Sin stock"}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};