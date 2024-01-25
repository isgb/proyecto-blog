import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const conseguirArticulos = async () => {

    // const url = Global.url+"articulos";
    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET")
    /*
        let peticion = await fetch(url, {
          method: "GET"
        });
    
        let datos = await peticion.json() 
    */

    console.log("datos:", datos)
    if (datos.status === "success") {
      setArticulos(datos.articulos)
    }

    setCargando(false)
  }

  useEffect(() => {

    conseguirArticulos()

  }, [])

  return (
    <>
      {cargando ? "Cargando..." :
        (

          articulos.length >= 1 ? (
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
          )

            :
            (
              <h1>No hay artículos</h1>
            )

        )}


    </>
  );
};
