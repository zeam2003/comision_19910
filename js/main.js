

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

/* 
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