/* let botonIngreso = document.getElementById('input-ingreso');

if (botonIngreso != null) {
    botonIngreso.onchange = (e) => {
        console.log(e.value);
    
        return e.value;
    }
    
} else {
    console.log('no hay nada aquí');
} */

let formIngreso = document.getElementById('formulario-ingreso');
formIngreso.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let ingreso = e.target;
    ingresoCategoria = ingreso.children[0].children[0].value;
    const categoria = new Categoria(ingresoCategoria);
    categoria.mostrarCargaCategoria();
    //categoria.cargarCategoria();
    //cargaProductos(categoria);

}
/* Funciones para la carga de Inventario */

const cargaProductos = (categoria) => {
    while (statusIngreso === true) {
        const producto = new Producto(
            prompt('Barcode o PLU'),
            capitalizarPrimeraLetra(prompt('Nombre')),
            parseFloat(prompt('Precio $')),
            parseFloat(prompt('Stock')),
            capitalizarPrimeraLetra(prompt('Negocio'))
        )
        alert(categoria.agregarProducto(producto));
    }
}

const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + (str.slice(1)).toLowerCase();

  }

