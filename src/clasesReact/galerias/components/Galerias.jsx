import { useState } from "react";
import "../components/galerias.css";

export const Galerias = () => {

  /* strings seran rutas de las fotos */
  const photos = [

  "/src/clasesReact/galerias/assets/mount01 (1).jpg",
  "/src/clasesReact/galerias/assets/mount02 (1).jpg",
  "/src/clasesReact/galerias/assets/mount03 (1).jpg",
  "/src/clasesReact/galerias/assets/mount04 (1).jpg",
  "/src/clasesReact/galerias/assets/mount05 (1).jpg",
  "/src/clasesReact/galerias/assets/mount06 (1).jpg",
  "/src/clasesReact/galerias/assets/mount07 (1).jpg",
  "/src/clasesReact/galerias/assets/mount08 (1).jpg",
  "/src/clasesReact/galerias/assets/mount09 (1).jpg",
  "/src/clasesReact/galerias/assets/mount10 (1).jpg",
  "/src/clasesReact/galerias/assets/mount11 (1).jpg"

  ];


  /* state con fotos que hemos seleccionado*/
  const [select, setSelected] = useState([]);

  /* este para la grande abajo */
  const [bigPic, setBigPic] = useState("");

  const addPhoto = (photo) => {
    setSelected([...select, photo]);
  };

  /* eliminar ultima fotfo del array */
  const removeLast = () => {
    setSelected(select.slice(0,-1));
  };

  /* eliminar la rimera foto del array */
    const removeFirst = () => {
    setSelected(select.slice(1));
  };


  return(
    <div className="gallery-container">

      <h1>Galeria de fotos de Montaña</h1>
     
     <div className="gallery-top-wrapper">
     <div className="gallery-top">

     {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className="photo-top"
            onClick={() => addPhoto(photo)}
          />
        ))}
        
      </div>

     </div>

      <h2>Fotos seleccioandas</h2>
      <div className="selected-container">
        {select.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className="photo-selected"

            /* clic para la foto en grande abajo */
            onClick={() => setBigPic(photo)}
          />
        ))}

      </div>

      <div className="buttons-container">
        <button onClick={removeFirst}>Remove first</button>
        <button onClick={removeLast}>Remove last</button>
      </div>

      <div className="bigpic-frame">
        {bigPic && (
          <img
           src={bigPic}
           className="bigpic"
           />
        )}
      </div>


    </div>
  )

}
