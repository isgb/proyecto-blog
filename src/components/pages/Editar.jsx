import React, { useEffect } from 'react'
import { useState } from 'react'
import {useForm} from '../../hooks/useForm'
import {Peticion} from '../../helpers/Peticion'
import {Global} from '../../helpers/Global'
import { useParams } from 'react-router-dom'

export const Editar = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado")
  const [articulo, setArticulo] = useState({})
  const params = useParams()

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );

   
    if (datos.status === "success") {
      console.log("datos:", datos);
      setArticulo(datos.Articulo);
    }

  };

  const guardarArticulo = async (e) => {
    e.preventDefault();
    
    let nuevoArticulo = formulario;
    // console.log(nuevoArticulo)

    const {datos, cargando} = await Peticion(Global.url+"crear","POST",nuevoArticulo)

    if(datos.status === "Success"){
      setResultado("guardado")
    }else{
      setResultado("error")
    }
    
    const fileInput = document.querySelector("#file");

    if(datos.status === "Success" && fileInput.files[0]){
      setResultado("guardado")

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const subida = await Peticion(Global.url+"subir-imagen/"+datos.articulo._id,"POST",formData, true);

      if(subida.datos.status === "success"){
        setResultado("guardado")
      }else{
        setResultado("error")
      }

    }

    // console.log(datos)
  }

  useEffect(() => {
    conseguirArticulo();
  }, [])
  

  return (
    <div className='jumbo'>
      <h1>Editar artículo</h1>
      <p>Formulario para editar: {articulo.titulo}</p>

      <strong>{resultado == "guardado" ? "Articulo guardado con exito" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>

      <form className='formulario' onSubmit={guardarArticulo}>
        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} value={articulo.titulo}/>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} value={articulo.titulo}/>
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <div className="mascara">
              {articulo.imagen != "deafult.png" && (
                <img src={Global.url + "imagen/" + articulo.imagen} />
              )}
              {articulo.imagen == "deafult.png" && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
              )}
            </div>
          <input type="file" name='file0' id='file' onChange={cambiado}/>
        </div>

        <input type="submit" value='Guardar' className='btn btn-success'/>
      </form>

    </div>
  )
}
