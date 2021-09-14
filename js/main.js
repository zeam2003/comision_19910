

let ingresarTexto = prompt('Dinos algo');
while (ingresarTexto != "ESC") {
    alert('El usuario dijo: ' + ingresarTexto);
    ingresarTexto = prompt('Di algo más... ');
}

/*
let ingresarNumero = parseFloat(prompt('ingrese un numero'));


console.log(ingresarNumero);


for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero + i;
    console.log(resultado);
} 

let nuevoIngreso = parseFloat(prompt('Ingrese un valor'));

for (let i = 1; i <= nuevoIngreso; i++){
    console.log('Hola' + nuevoIngreso );
}
*/