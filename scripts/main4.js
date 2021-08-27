// Funciones de orden superior
//1-  Crear una función que reciba un conjunto de personajes y el nombre de una casa, y que devuelva un conjunto nuevo con los nombres, casa y actor que interpreta a cada personaje que estudian en dicha casa.
//  Si la casa ingresada como argumento no existe, la función debería devolver un mensaje informándolo.
function persYCasa(personajes, casa){
    personajes.some(function(personaje) {
        return personaje.house === casa
    })
    let filtrarCasa = personajes.filter((personaje) => personaje.house === casa);
        let ordenarCasa = filtrarCasa.map((personaje) => {
            let contenedor = {
                nombre: personaje.name,
                casa: personaje.house,
                actor: personaje.actor,
            };
            return contenedor;
        })
        return ordenarCasa;
}
console.log(persYCasa(students,"Gryffindor"))
/* let personajesYCasa = (personajes, casa) => {
    if (casa === "Gryffindor" || casa === "Slytherin" || casa === "Hufflepuff" || casa === "Ravenclaw") {
        let filtrarCasa = personajes.filter((personaje) => personaje.house === casa);
        let ordenarCasa = filtrarCasa.map((personaje) => {
            let contenedor = {
                nombre: personaje.name,
                casa: personaje.house,
                actor: personaje.actor,
            };
            return contenedor;
        })
        return ordenarCasa;
    } return "Error: Casa no existe"
} */
/* console.table(personajesYCasa(students, "Gryffindor")) */

// 2-  Crear una función que reciba un conjunto de cervezas, un nombre de propiedad y un orden.
//  Las propiedades permitidas como criterio serán: ibu, alcohol, o nombre. Ante cualquier otro ingreso, la función debe devolver un mensaje informando esta limitación.
//  La función debe devolver un nuevo conjunto ordenado en base a la propiedad ingresada como segundo argumento, de manera ascendente o descendente dependiendo del tercer argumento. 
console.log("")
let funcionDeCervezas = (cervezas, propiedad, orden) => {
    let ordenarCervezas = [...cervezas]
    if (propiedad === "ibu" || propiedad === "abv" || propiedad === "name") {
        if (orden === true /* ascendente */) {
            ordenarCervezas.sort(function (cervezaA, cervezaB) {
                if (cervezaA[propiedad] < cervezaB[propiedad]) {
                    return -1
                }
                if (cervezaA[propiedad] > cervezaB[propiedad]) {
                    return 1
                } return 0
            })
        } else /* descendente */ {
            ordenarCervezas.sort(function (cervezaA, cervezaB) {
                if (cervezaA[propiedad] < cervezaB[propiedad]) {
                    return 1
                }
                if (cervezaA[propiedad] > cervezaB[propiedad]) {
                    return -1
                } return 0
            })
        }
        return ordenarCervezas
    } return "Error: dato incorrecto, debe ingresar nombre de cerveza, ibu o abv"
}
/* console.table(funcionDeCervezas(beers, "abv", true)) */

