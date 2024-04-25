let precioProducto
let cuotas
let interes
let precioFinal
let numero
let tope

function ejecutar() {
    let opcion = parseInt(prompt("Ingrese 1 para CALCULADORA DE CUOTAS, 2 para TABLA DE MULTIPLICACIÓN"))
    if (opcion == 1) {
        console.log ("Ha seleccionado la calculadora de cuotas")
        leerPrecio()
        leerCuotas()
        leerInteres()
        calcularPrecioCuotas()
        console.log("El precio de su producto, en " + cuotas + " cuotas y con un " + interes + "% de interés es de $" + precioFinal + " mensuales. Su producto sumará $" + (precioProducto * (interes / 100)).toFixed(2) + " de interés" )
        alert("Aplicación finalizada, ingrese ejecutar() en la consola para reiniciar")
    } else if (opcion == 2) {
        console.log("Ha seleccionado la tabla de multiplicación")
        leerNumero()
        leerTope()
        mostrarTabla()
        alert("Aplicación finalizada, ingrese ejecutar() en la consola para reiniciar")
    } else {
        console.log("Valor Incorrecto")
        ejecutar()
    }
}

let leerPrecio = function() {
    precioProducto = parseInt(prompt("Ingrese el valor de su producto"))
    if (isNaN(precioProducto)) {
        console.log("Valor incorrecto")
        leerPrecio()
    } else {
        console.log("Ha ingresado un valor de $" + precioProducto)
    }
}

let leerCuotas = function() {
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas"))
    if (isNaN(cuotas)) {
        console.log("Valor incorrecto")
        leerCuotas()
    } else {
        console.log("Ha ingresado " + cuotas + " cuotas")
    }
}

let leerInteres = function() {
    interes = parseInt(prompt("Ingrese el % de interés"))
    if (isNaN(interes)) {
        console.log("Valor incorrecto")
        leerInteres()
    } else {
        console.log("Ha ingresado un " + interes + "% de interés")
    }
}

let calcularPrecioCuotas = function() {
    if (interes == 0) {
        precioFinal = (precioProducto / cuotas).toFixed(2)
    } else {
        precioFinal = ((precioProducto + (precioProducto * (interes / 100))) / cuotas).toFixed(2)
    }
}

let leerNumero = function() {
    numero = parseInt(prompt("Ingrese un número"))
    if (isNaN(numero)) {
        console.log ("Valor Incorrecto")
        leerNumero()
    } else {
        console.log ("Ha ingresado el número " + numero)
    }
}

let leerTope = function() {
    tope = parseInt(prompt("Ingrese el tope de multiplicación"))
    if (isNaN(tope)) {
        console.log ("Valor Incorrecto")
        leerTope()
    } else {
        console.log ("Ha ingresado un tope de multiplicación de " + tope)
    }
}

let mostrarTabla = function() {
    for (let i = 1; i <= tope; i++) {
        let resultado = numero * i
        console.log("-- " + numero + " X " + i + " = " + resultado + " --")
    }
}