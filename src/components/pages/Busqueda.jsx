import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  const conseguirArticulos = async () => {

    // const url = Global.url+"articulos";
    const { datos, cargando } = await Peticion(Global.url + "buscar/"+params.busqueda, "GET")
    /*
        let peticion = await fetch(url, {
          method: "GET"
        });
    
        let datos = await peticion.json() 
    */

    console.log("datos:", datos)
    if (datos.status === "success") {
      setArticulos(datos.articulos)
    }else{
      setArticulos([]);
    }

    setCargando(false)
  }

  useEffect(() => {
    conseguirArticulos()
  }, [])

  useEffect(() => {
    conseguirArticulos()
  }, [params])

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
