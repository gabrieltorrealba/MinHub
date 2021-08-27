//JS Tarea 2
console.log("Exercise 1")
let names = ["Dario", "Matias", "Rodrigo", "Renzo", "Branko", "Gabriel"]
names.sort()
console.log('Primer index: ' + names[0])
console.log("")

console.log('Ultimo index: ' + names[names.length - 1])
console.log("")

console.log('"Array nombres"')
for (let index = 0; index < names.length; index++) {
    let element = names[index];
    console.log(element)
}
console.log("")

console.log("Exercise 2")
console.log('"Array numero while"')
let ages = [24, 27, 25, 22, 30, 37]
let i=0
while(i < ages.length){
    let age = ages[i]
    console.log(age);
    i++;
}
console.log('"Numeros pares while"')
let j = 0
while (j < ages.length) {
    if (ages[j] % 2 == 0) {
        console.log(ages[j])
    }
    j++
}
console.log("")
console.log('"Array numeros for"')
for (let index = 0; index < ages.length; index++) {
    let element = ages[index];
    console.log(element)
}
console.log('"Numeros pares for"')
for (let index = 0; index < ages.length; index++) {
    let element = ages[index];
    if (element%2==0) {
        console.log(element)
    }  
}
console.log("")

console.log("Execise 3")
let num = [3,6,67,6,23,11,0,100,8,93,3,67,23,8];
function numeroMasBajo (array) {
    console.log("Menor número: " + Math.min(...array))
}
numeroMasBajo (num)
console.log("")

console.log("Execise 4")
function numeroMasAlto (array) {
    console.log("Mayor número: " + Math.max(...array))
}
numeroMasAlto(num)
console.log("")

console.log("Execise 5")
function parametros(array, i) {
    console.log("valor del index = " + array[i])
}
parametros(num, 7)
console.log("")

console.log("Execise 6")
let numRepetidos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,99,12]
let repetidos = []
let numeros = [...numRepetidos].sort()
function pares(array) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i + 1] === numeros[i]){
            repetidos.push(numeros[i])
        }    
    }
    console.log("Numeros duplicados: " + repetidos)
}
pares(numRepetidos)
console.log("")

console.log("Execise 7")
let myColor = ["Red", "Green", "White", "Black"]
function stringUnidos(array) {
    console.log("String unidos: " + array.join(', '))
}
stringUnidos(myColor)