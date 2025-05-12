console.log("Cargando scripts desde archivo externo...")


var boton1 = document.getElementById("boton_1")
boton1.textContent = "Boton_1"
boton1.style.display = "block"


// comentario de 1 línea

/*
comentario
multiples 
líneas 
*/

// Definición de variables

var variableNumero1 = "Variable tipo texto";
console.log(variableNumero1);

// Tipos de datos en JS
var tipoTexto = "Variable tipo 'texto' comillas dobles";
var tipoTexto2 = 'Variable tipo "texto" comillas simples';
var tipoTexto2 = 'Variable tipo \'texto\' comillas simples';
console.log(tipoTexto + " " + tipoTexto2)

var url = "www//google.com"

var numero1 = 49;
var numero2 = 35;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

console.log(tipoTexto + numero1)
console.log(numero1 + tipoTexto)

var booleana = true;
console.log(booleana)

//operador y

console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);

//operador o

console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);

// Definición de funciones

var saludo = "Buenas tardes!"

function nombreFuncion(argumentos) {
    //código de la función
    console.log(saludo);
};

//llamar la función
nombreFuncion();

function saludoPersonal(nombre) {
    console.log("Buenas tardes " + nombre);
}

saludoPersonal("Roberto");