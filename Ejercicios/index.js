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