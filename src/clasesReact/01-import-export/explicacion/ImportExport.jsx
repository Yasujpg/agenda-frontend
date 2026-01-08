//normas de los componentes
// tienen que empezar por mayúsculas
// SOLAMENTE pueden retornar un elemento

// const edad = require("./ejemplosExport.js")
import patata, {  edad, apellido } from "./ejemplosExport.js"
import dividir, { nombFem, nombMas, user } from './ejercicioEpxport.js'

import './importExport.css'

const ImportExport = () =>{

    //logica
    let nombre = "Pepe"
    return(
        //renderización
        <div className="section2">
            <h1>Explicación import export</h1>
            <hr />
            <p>Para importar y exportar necesitamos un archivo que exporte y otro que importe la funcionalidad</p>
            <h2>tipos de exportaciones</h2>
            <h3>1.- Exportación con nombre antes de la sentencia</h3>
            <h3>Todas las exportaciones con nombre se importan entre {"{}"}</h3>
            <p>La importación va entre  </p>
            <p>El nombre es {nombre}</p>
            <p>La edad es {edad}</p>

            <p>El apellido es {apellido}</p>
            <h3>La importación cuando la exportación es por defecto no lleva {"{}"} y además podemos elegir el nombre con el que vamos a importar</h3>
            <h3>Una sola exportación por defecto por archivo</h3>
            <p>La prueba es {patata}</p>

            <hr />
            <h4>Nombres femeninos</h4>
            <p>{nombFem}</p>
            <p>{nombFem[0]}</p>
            <p>{nombFem[1]}</p>
            <p>{nombFem[2]}</p>
            <hr />
            <h4>Nombres masculinos</h4>
            <p>{nombMas[0]}</p>
            <p>{nombMas[1]}</p>
            <p>{nombMas[2]}</p>
            <hr />
            <p>El resultado de dividir 3 entre 4 es {dividir(3, 4)}</p>
            <hr />
            <h2>mi usuario</h2>
            <p>nombre: {user.name}</p>
            <p>email: {user.email}</p>
            <p>password: {user.pass}</p>
        </div>
    )
}

export default ImportExport;