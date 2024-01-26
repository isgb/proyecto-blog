import React from 'react'
import { Global } from '../../helpers/Global'

export const Listado = ({articulos, setArticulos}) => {
  return (
    
    articulos.map(articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">

              {  articulo.imagen != "deafult.png" && <img src={Global.url + "imagen/" + articulo.imagen} /> }
              {  articulo.imagen == "deafult.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}

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
}
