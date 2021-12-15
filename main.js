/*
    Sugar sintax
*/

/// Desestructuracion

const obj = [1,2]

const auxA = obj[0]
const auxB = obj[1]

//console.log(`\nPrimera variable: ${auxA} \nSegunda variable: ${auxB}`);

const [aux1, aux2] = obj

//console.log(`\nPrimera variable: ${aux1} \nSegunda variable: ${aux2}`);


// Ternario

// if(aux1 == 1){
//     console.log("hola");
// }else{
//     console.log("adios");
// }

// const resTer = (aux1 == 2) ? "hola" : "adios"

// console.log(resTer)

// Spread

// const arr = [1,2,3,4,5]

// let arrAux = [...arr]

// console.log(arrAux)

// const objAux = {el: "test", el2: "test2"}

// var {el: variable} = objAux

// console.log(variable)

const pro = fetch("https://rickandmortyapi.com/api/character")

console.log(pro)