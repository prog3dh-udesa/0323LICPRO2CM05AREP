const operaciones = require('./utils/operaciones')
const moment = require('moment')
//1 Check
function calcularConsumo(edadActual, consumoXDia, producto){
    let edadMaxima = 120
    let calculo = (edadMaxima - edadActual) * (consumoXDia *365)
    return `Vas a consumir ${calculo} ${producto} durante el resto de tu vida`
}

//console.log(calcularConsumo(30, 1, 'Milanga'))

//2 check

function cambiarArray(array, nuevoValor){
    array.pop()
    array.push(nuevoValor)
    return array
}

let nuevoArray = cambiarArray([1,2,3], 4)
//console.log(nuevoArray)

//3

let libro ={
    nombre:'Condorito',
    anho:1995,
    genero:'Comedia',
    cantPalabras:300,
    esParaAdultos: true,
    loPuedeLeer: function(edad){
        if(this.esParaAdultos && edad >= 18){
            return true
        } else {
            return false
        }
    }
}

let resultadoDeSuma = operaciones.sumarDosNumeros(1, 5)
//console.log(resultadoDeSuma)

let resultadoMultiplicacion = operaciones.multiplicarDosNumeros(2, 5)
//console.log(resultadoMultiplicacion);

let hoy = moment().format('MMMM YYYY dddd, h:mm')
console.log(hoy)
