import React, { useEffect, useState } from "react";

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    
    let data = [
      {
        _id:1,
        titulo: "Titulo 1",
        contenido : "Contenido"
      },
      {
        _id:2,
        titulo: "Titulo 1",
        contenido : "Contenido"
      },
      {
        _id:3,
        titulo: "Titulo 1",
        contenido : "Contenido"
      },
    ];

  }, [])
  

  return (
    <>
      <article className="articulo-item">
        <div className="mascara">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
        </div>
        <div className="datos">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">victorroblesweb.es</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
    </>
  );
};
