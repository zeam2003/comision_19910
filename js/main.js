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

