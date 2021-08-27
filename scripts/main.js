//JS Tarea 1
console.log('"Starting javascript..."')
var myName = "Gabriel"
console.log(myName)
var age = 37
console.log(age)
var ignasiAge = 32
var ageDiff = age - ignasiAge
console.log(ageDiff)
if (age > 21) {
    console.log('"You are older than 21"')
} else {
    console.log('"You are not older than 21"')
}
if (ignasiAge > age) {
    console.log('"Ignasi is older than you"')}
    else if (ignasiAge === age){
        console.log('"You have the same age as Ignasi"')
    }
 else { console.log('"Ignasi is younger than you"') 
}
// Ejercicio adicional 
var velocidadMinCarril1 = 60
var velocidadMaxCarril1 = 80
var velocidadMaxCarril2 = 100
var velocidadMaxCarril3 = 120

var velocidadAutoRojo = 70
var velocidadAutoAzul = 90
var velocidadAutoGris = 110
var velocidadAutoVerde = 190

console.log("")
if (velocidadAutoRojo >= velocidadMinCarril1 && velocidadAutoRojo <= velocidadMaxCarril1){
    console.log('"El auto Rojo debería circular en el carril 1 por su velocidad de ' + velocidadAutoRojo + ' Km/h"')
}
    else if (velocidadAutoRojo>velocidadMaxCarril1 && velocidadAutoRojo <= velocidadMaxCarril2) {
    console.log('"El auto Rojo debería circular en el carril 2 por su velocidad de ' + velocidadAutoRojo + ' Km/h"')
}
else if (velocidadAutoRojo>velocidadMaxCarril2 && velocidadAutoRojo <= velocidadMaxCarril3) {
    console.log('"El auto Rojo debería circular en el carril 3 por su velocidad de ' + velocidadAutoRojo + ' Km/h"')
}
else { console.log('"El auto Rojo está circulando a una velocidad no permitida de ' + velocidadAutoRojo + ' Km/h"')  
}

console.log("")
if (velocidadAutoAzul >= velocidadMinCarril1 && velocidadAutoAzul <= velocidadMaxCarril1){
    console.log('"El auto Azul debería circular en el carril 1 por su velocidad de ' + velocidadAutoAzul + ' Km/h"')
}
    else if (velocidadAutoAzul>velocidadMaxCarril1 && velocidadAutoAzul <= velocidadMaxCarril2) {
    console.log('"El auto Azul debería circular en el carril 2 por su velocidad de ' + velocidadAutoAzul + ' Km/h"')
}
else if (velocidadAutoAzul>velocidadMaxCarril2 && velocidadAutoAzul <= velocidadMaxCarril3) {
    console.log('"El auto Azul debería circular en el carril 3 por su velocidad de ' + velocidadAutoAzul + ' Km/h"')
}
else { console.log('"El auto Azul está circulando a una velocidad no permitida de ' + velocidadAutoAzul + ' Km/h"')  
}

console.log("")
if (velocidadAutoGris >= velocidadMinCarril1 && velocidadAutoGris <= velocidadMaxCarril1){
    console.log('"El auto Gris debería circular en el carril 1 por su velocidad de ' + velocidadAutoGris + ' Km/h"')
}
    else if (velocidadAutoGris>velocidadMaxCarril1 && velocidadAutoGris <= velocidadMaxCarril2) {
    console.log('"El auto Gris debería circular en el carril 2 por su velocidad de ' + velocidadAutoGris + ' Km/h"')
}
else if (velocidadAutoGris>velocidadMaxCarril2 && velocidadAutoGris <= velocidadMaxCarril3) {
    console.log('"El auto Gris debería circular en el carril 3 por su velocidad de ' + velocidadAutoGris + ' Km/h"')
}
else { console.log('"El auto Gris está circulando a una velocidad no permitida de ' + velocidadAutoGris + ' Km/h"')  
}

console.log("")
if (velocidadAutoVerde >= velocidadMinCarril1 && velocidadAutoVerde <= velocidadMaxCarril1){
    console.log('"El auto Verde debería circular en el carril 1 por su velocidad de ' + velocidadAutoVerde + ' Km/h"')
}
    else if (velocidadAutoVerde>velocidadMaxCarril1 && velocidadAutoVerde <= velocidadMaxCarril2) {
    console.log('"El auto Verde debería circular en el carril 2 por su velocidad de ' + velocidadAutoVerde + ' Km/h"')
}
else if (velocidadAutoVerde>velocidadMaxCarril1 && velocidadAutoVerde <= velocidadMaxCarril3) {
    console.log('"El auto Verde debería circular en el carril 3 por su velocidad de ' + velocidadAutoVerde + ' Km/h"')
}
else { console.log('"El auto Verde está circulando a una velocidad no permitida de ' + velocidadAutoVerde + ' Km/h"')  
}
 

