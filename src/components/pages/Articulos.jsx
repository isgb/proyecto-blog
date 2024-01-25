import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";

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

        articulos.length >= 1 ?
          <Listado
            articulos={articulos}
            setArticulos={setArticulos}
          />
          : <h1>No hay artículos</h1>

      }


    </>
  );
};
