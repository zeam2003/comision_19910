// Clase 5 //

/*
class CreaCoders {
    constructor( nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
        this.level = 1;
        this.zone = 'Asgard';
    }
    hablar() {
        console.log('Hola soy el Coder ' + this.nombre);
    }
}

const coderMaximiliano = new CreaCoders('Maximiliano', 40, 'Av Siempreviva');

//console.log(coderMaximiliano.hablar());
coderMaximiliano.hablar();

/* let alumno = 'Pedro Sanchez es alumno';
console.log(alumno.length);
console.log(alumno.toLowerCase());
console.log(alumno.toUpperCase()); */


/* function crearCoders( alumno1, alumno2, alumno3) {
    this.alumno1 = alumno1;
    this.alumno2 = alumno2;
    this.alumno3 = alumno3;
}

const coders = new crearCoders('Maximiliano', 'Santiago', 'Matias');
const codersSegundaCamada = new crearCoders('Pepe', 'Luis', 'Julio');

console.log(coders);
console.log(codersSegundaCamada); */

/* 
const coders = {
    alumno1: "Maximiliano",
    alumno2: 'Santiago',
    alumono3: 'Pepe',
};

console.log(coders); */

// Clase 4//
/* 
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = (x) => x * 0.21;
let precioProducto = 500;
let precioDescuento = 50;

let nuevoPrecio = resta(

    suma(
        precioProducto,
            iva(precioProducto)),
    
            precioDescuento
);

console.log(nuevoPrecio);


const sumar =(a, b) => {
    resultado = a + b;
};

const mostrar = (mensaje) => {
    console.log(mensaje);
};

sumar(21, 6);
mostrar(resultado);


 */

/*const primerNumero = parseFloat(prompt('Ingresa un número: '));
const operador = prompt('Ingresa un operador ( + - * / ): ');
const segundoNumero = parseFloat(prompt('Ingresa el segundo número'));

let resultado;

function calculadora(operador, numero1, numero2) {
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            return 'El resultado es: ' + resultado;

        case '-':
            resultado = numero1 - numero2;
            return 'El resultado es: ' + resultado;
        case '*':
            resultado = numero1 * numero2;
            return 'El resultado es: ' + resultado;
        case '/':
            resultado = numero1 / numero2;
            return 'El resultado es: ' + resultado;   
        default:
            return 'Operacion invalida';
    }

    
}
calculadora(operador, primerNumero, segundoNumero);

function mostrar(mensaje) {
    console.log(mensaje);
}

mostrar(resultado);
*/

/* 
let resultado = 0;

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(21,6);
mostrar(resultado); */



/* function solicitarNombre(){
    let nombreIngresado = prompt("ingresar nombre");
    alert("El nombre ingresado es  " + nombreIngresado);
}

solicitarNombre(); */



//Clase 3

// Entregable


//Practica

/*let entrada = prompt('Ingresar un nombre');
while( entrada != 'ESC') {
    switch (entrada) {
        case "ANA":
            alert("Hola Ana");
            break;
        case "JUAN":
            alert("Hola Juan");
            break;    
    
        default:
            alert('Quien sos?');
            break;  
    }
    entrada = prompt('Ingresar un nombre');    
    console.log(entrada);
} 



let numero = 0;

do {
    numero = prompt('Ingresar');
    console.log(numero);
} while( parseInt(numero)); */

/* let entrada = prompt('Ingresar un dato');

do {
    console.log('Primera vez');
    entrada = prompt('Ingresar otro dato');
}

while (entrada != 'ESC'); */


/* let entrada = prompt('Ingresar un dato');

while (entrada != 'ESC') {
    alert('El usuario Ingreso: ' + entrada);
    entrada = prompt('Ingresar otro dato');
} */


/* for (let i = 1; i <= 10; i++ ) {
    if ( i == 5 ) {
        continue;
    }

    console.log(i);
}
 */
/* 
for (let i = 1; i <= i; i++ ) {
    if ( i == 5 ) {
        break;
    }

    console.log(i);
} */


/* for (let i = 1; i <= 2; i++) {
    let ingresarNombre = prompt('Ingresar Nombre');
    console.log(' Turno N° ' + i + ' Nombre: ' + ingresarNombre);
}
 */
/* let ingresarNumero = parseInt(prompt('Ingresar Numero'));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + 'x' + i + '=' + resultado);
} */

// let inicio = 1; 
// let fin = 10;

/* let inicio = prompt("Ingrese dia");
let finDeMes = 30;
for (inicio; inicio <= finDeMes; inicio++) {
    console.log('Inicio vale: ', inicio); */

/* for (let inicio = 1; inicio <= 5; inicio++) {
    console.log(inicio);
 


//Clase 2

/*Entregable 
let numero = prompt("Ingrese un Número");

if( numero > 1000 ) {
    alert("El número es mayor a 1000");
} else {
    alert("El número no cumple la condición");
}

let textoIngresado = prompt("Ingrese un Texto");

if ( textoIngresado == "Hola" ) {
    console.log("Se ingreso Hola");
} else {
    console.log("No se ingreso la palabra esperada");
}

let numeroIngresado = prompt("Ingrese nuevamente un Número");

if (numeroIngresado >= 10 && numeroIngresado <= 50 ){
    alert("estas entre 10 y 50");
} else {
    alert("No estas entre el rango esperado");
}
*/

/* 
let nombreIngresado = prompt('Ingresar Nombre');
let apellidoIngresado = prompt('Ingresar apellido');

if (nombreIngresado != '' || apellidoIngresado != '') {
    alert('Nombre: ' + nombreIngresado + '\nApellido: ' + apellidoIngresado);
} else {
    alert('Error: Ingresar nombre y apellido');
} */
/* 
if (nombreIngresado != '' && apellidoIngresado != ''){
    alert('Nombre: ' + nombreIngresado + '\nApellido: ' + apellidoIngresado);
} else {
    alert('Error: Ingresar nombre y apellido');
} */



/* let edad = 18;
let edadIngresada = prompt("Ingresa la edad: ");
let edadingresadaParseada = parseInt(edadIngresada);

if (edad === edadingresadaParseada) {
    alert('Es igual');
} else {
    alert('No es igual');
} */


/* if (edad < 18) {
    alert("Es menor de Edad");  
} else if (edad == 18) {
    alert("Tiene 18");
} else {
    alert("Es mayor de edad");
} */


/* let nombreUsuario = prompt('Nos dices tu nombre?');

if (nombreUsuario == "") {
    alert('No ingresaste nada');
} else {
    alert('Ingresastes ' + nombreUsuario);
} */

/* let precio = 100;

if (precio < 20) {
    console.log("Es barato");
} else if (precio < 60) {
    console.log("El precio es normal");
} else {
    console.log("Es caro");
} */