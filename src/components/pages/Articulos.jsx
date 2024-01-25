import React, { useEffect, useState } from "react";

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {

   conseguirArticulos()

  }, [])
  
  const conseguirArticulos = async () =>{

    const url = "http://localhost:3900/api/articulos";
    let peticion = await fetch(url, {
      method: "GET"
    });

    let datos = await peticion.json()

    console.log("datos:",datos)

  }

  return (
    <>
    {
      articulos.map(articulo => {
        return (
        <article key={articulo._id} className="articulo-item">
          <div className="mascara">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
          </div>
          <div className="datos">
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
        )
      })
    }
      
    </>
  );
};
