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

}

const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + (str.slice(1)).toLowerCase();

  }

