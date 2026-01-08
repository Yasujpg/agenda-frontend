//a) export con nombre antes de sentencia un array con 3 nombre femeninos y pintarlos pantalla

export const nombFem = ["Ana", "Maria", "Pilar"]

//b) export con nombre después un array con 3 nombre masculinos y pintarlos pantalla

const nombMas = ["Pepe", "Juan", "Diego"]
//c) exportar por defecto, antes de la sentencia, una función que pasados dos 
// parámetros nos devuelva el resultado de su división

export default (a, b) => {
    return a/b
}


//d) exportar antes de la sentencia un objeto user
//con 3 propiedades (name, email, password);
export let user = {
    name: "Antonio",
    email: "antonio@gmail.com",
    pass: "1234"
}

export {nombMas}