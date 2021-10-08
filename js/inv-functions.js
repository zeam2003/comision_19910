/* let botonIngreso = document.getElementById('input-ingreso');

if (botonIngreso != null) {
    botonIngreso.onchange = (e) => {
        console.log(e.value);
    
        return e.value;
    }
    
} else {
    console.log('no hay nada aquí');
} */
/* 
const contenedorMuestraData = document.getElementById('contenedor-muestra');

const cargaHtml = (dato) => {
    return `
        <p class="suficiente">${dato.nombre}</p>
    `
}

const renderHtml = (data, container) => {
    container.innerHTML = "";

    for (const dato of data) {
        const dataHTML = cargaHtml(dato);
        console.log(dato);
        container.innerHTML += dataHTML;
    }
};

renderHtml(data, contenedorMuestraData);
 */
let formIngreso = document.getElementById('formulario-ingreso');
formIngreso.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
    e.preventDefault();
    
    
    let ingreso = e.target;
    ingresoCategoria = ingreso.children[0].children[0].value;
    const categoria = new Categoria(ingresoCategoria);

    console.log(ingresoCategoria);
    categoria.cargarCategoria();
    flagFormulario = false;
    // categoria.mostrarCargaCategoria()
    
    console.log(flagCategoria);
    flagCategoria = true;
    if ( flagCategoria ) {
        // document.getElementById('title-form-tres').remove();
        flagFormulario = true;
        categoria.mostrarCargaCategoria();
        console.log('estoy aqui');
        let formIngresoDos = document.getElementById('formDos')
        formIngresoDos.addEventListener('submit', validarFormDos)

        function validarFormDos(e) {
            e.preventDefault();
            let ingresoPlu = e.target[0].value;
            let ingresoProducto = e.target[1].value;
            let ingresoPrecio = e.target[2].value;
            let ingresoStock = e.target[3].value;
            let ingresoNegocio = e.target[4].value;
            const producto = new Producto(ingresoPlu, ingresoProducto, ingresoPrecio, ingresoStock, ingresoNegocio)
            categoria.agregarProducto(producto);
            categoria.actualizacionGeneral();
            document.getElementById('formDos').reset();
            document.getElementById('formulario-ingreso').reset();
            document.getElementById('title-form-dos').remove();
            document.getElementById('formDos').remove();
        
            flagCategoria = false;
            flagFormulario = false;
           // categoria.mostrarCargaCategoria();
        }    
    } else {
        console.log('que hago aca');
    }
    //cargaProductos(categoria);
    

}





/* Funciones para la carga de Inventario */

/* const cargaProductos = (categoria) => {
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
} */

const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + (str.slice(1)).toLowerCase();

  }

