//Tarea 3
//Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
console.log('"Exercie 1"')
let reverse = 32443
function reversesNumber(num) {
    num = num.toString()
    console.log("Número invertido: " + num.split("").reverse().join(""))
}
reversesNumber(reverse)
console.log("")

//Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string
console.log('"Exercie 2"')
let desordenado = "webmaster"
function stringOrdenado(string) {
    console.log("Ordenado alfabeticamente: " + string.split("").sort().join(""))
}
stringOrdenado(desordenado)
console.log("")

//Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia"
console.log('"Exercie 3"')
let frase = "prince of persia"
function uppercase(string){
  let dividir = string.split(' ');
  let arrayVacio = [];
  for(let i = 0; i < dividir.length; i++){
      arrayVacio.push(dividir[i].charAt(0).toUpperCase()+dividir[i].slice(1));
  }
  console.log("En mayuscula primera letra de cada palabra: " + arrayVacio.join(' '))
}
uppercase(frase)
console.log("")
//Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
console.log('"Exercie 4"')
let fraseString = "Web Development Tutorial"
function palabraMasLarga(string) {
    let stringDividido = string.split(' ')
    let masLarga = ''
    for (let j = 0; j < stringDividido.length; j++) {
        if (stringDividido[j].length > masLarga.length) {
            masLarga = stringDividido[j]
        } 
    }
    return masLarga
}
console.log(palabraMasLarga(fraseString))
console.log("")

// 1.    Crear un array que contenga 10 números enteros.
let enteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//2.    Recorrer el array del punto 1, contar la cantidad de números pares y mostrar esa cantidad por consola
console.log('"Extra 2"')
function contarPares(array) {
    let contPares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            ++contPares
        }   
    }  
    return contPares
}
console.log("Cantidad números pares: " + contarPares(enteros))
console.log("")

//3.    Crear una función que reciba por parámetro un array y un índice, y que evalúe si el contenido del array en dicho índice sea el mayor valor del array. De ser así, que imprima un mensaje por consola que diga "Es mayor", en caso contrario que diga " no es mayor".
//Ejemplo:
//miFuncion([6,4,5,8,1], 3); //esperado "es mayor"
//miFuncion([3,3,6,5,9,6], 0); //esperado "no es mayor"
console.log('"Extra 3"')
function mayorNumero(array,index) {
    let valorComparar = Math.max(...array)
    if (array[index] === valorComparar){
        console.log(array[index] + " es mayor");
    } else {
        console.log(array[index] + " es menor")
    }
}
let arrayPrueba = [6,4,5,8,1,9,10]
mayorNumero(arrayPrueba, 5)
console.log("")

/* 4.   Crear una función que reciba un número entero como parámetro.
Mostrar por consola  la calificación según la nota ingresada como argumento:
o    0-3: Muy deficiente
o    4-5: Insuficiente
o    6: Suficiente
o    7: Bien
o    8-9: Notable
o    10: Sobresaliente */
console.log('"Extra 4"')
let nota = 3
function promedio(num) {
    if ((num >= 0) && (num <= 3)) {
        console.log("Nota: " + num + " Muy deficiente")
    } else if ((num === 4) || (num === 5)){
        console.log("Nota: " + num + " Insuficiente")
    } else if (num === 6){
        console.log("Nota: " + num + " Suficiente")
    } else if (num === 7){
        console.log("Nota: " + num + " Bien")
    } else if ((num === 8) || (num === 9)){
        console.log("Nota: " + num + " Notable")
    } else if (num === 10) {
        console.log("Nota: " + num + " Sobresaliente")
    } else {
        console.log("Error: " + num + " es un valor invalido, debe ingresar un número del 0 - 10")
    }
}
promedio(nota)
console.log("")
//5.    Crear una función que reciba por parámetro un array.
//Se deben encontrar los números repetidos para luego mostrar por consola cuántos números se repiten.
//Ejemplo:
//miFuncion([6,4,5,1,5,6,8,1,3,2]); //esperado: "Hay 3 numeros repetidos."
//miFuncion([1,2,3,2,4,5,6,7]); //esperado: "Hay 1 numero repetidos."
//miFuncion([9,8,7,6,5,4]); //esperado: "Hay 0 numeros repetidos."
console.log('"Extra 5"')
let arrayNuevo = [6,4,5,1,5,6,8,1,3,2,6,6,6,6]
function cantRepetidos(array) {
    let contArray = [...array].sort()
    let repetidos = 0
    for (let i = 0; i < contArray.length; i++) {
        if (contArray[i + 1] === contArray[i] && contArray[i] != contArray[i - 1])  {
            repetidos++
        }    
    }
    return repetidos
}
console.log('"Hay ' + cantRepetidos(arrayNuevo) + ' números repetidos."')
