
export const Peticion = async (url,metodo, datosGuardar = "", archivos = false) => {

    let cargando = true;

        let opciones = {
            method : "GET"
        }

        if( metodo == "GET" || metodo == "DELETE")
        {
            opciones = {
                method : metodo,
            }
        }

        if(metodo == "POST" || metodo == "PUT"){

            let body = "";

            if(archivos){
                body = datosGuardar;
            }else{
                body = JSON.stringify(datosGuardar);
            }

            opciones = {
                method : metodo,
                body,
                headers:{
                    "Content-Type":"application/json"
                }
            };
        }

            const peticion = await fetch(url,opciones);
            const datos = await peticion.json();

            cargando = false;
   

    return {
        datos,
        cargando
    }

}