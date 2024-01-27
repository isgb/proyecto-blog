import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  const conseguirArticulo = async () => {
    const { datos, cargando } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );

    console.log("datos:", datos);
    if (datos.status === "success") {
      setArticulo(datos.Articulo);
    }

    setCargando(false);
    console.log(articulo);
  };

  useEffect(() => {
    conseguirArticulo();
  }, []);

  return (
    <>
      <div className="jumbo">
        {cargando ? (
          "Cargando..."
        ) : (
          <>
            <div className="mascara">
              {articulo.imagen != "deafult.png" && (
                <img src={Global.url + "imagen/" + articulo.imagen} />
              )}
              {articulo.imagen == "deafult.png" && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
              )}
            </div>
            <h1>{articulo.titulo}</h1>
            <span>{articulo.fecha}</span>
            <p>{articulo.contenido}</p>
          </>
        )}
      </div>
    </>
  );
};
