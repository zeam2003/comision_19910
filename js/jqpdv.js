const productos = [
    { 
      id:  1, 
      nombre: 'Empanadas de carne', 
      categoria: 'Empanadas',
      precio: 750
    },
    { 
      id:  2, 
      nombre: 'Grande de Muzza', 
      categoria: 'Pizzas',
      precio: 650
    },

]
$(document).ready(function(){
  // ToDo a revisar posible refactorización de creación de elementos en el localstorage
  /*   console.log('hola');
    let categorias = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let categoria = JSON.parse(localStorage.getItem(clave));
        categorias.push(categoria);
        
    }
    console.log(categorias);
     */
});

for (const producto of productos) {
    $('#categorias-botones').append(`
    <div class="col mt-5">
        <div class="card">
            <h5 class="card-header">${producto.categoria}</h5>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button id="btn${producto.id}" type="button" class="btn btn-primary">Agregar</button>
            </div>
        </div>
    </div>
    `)
    $(`#btn${producto.id}`).on('click', function() {
        console.log(`Agregado ${producto.nombre}`);
        $('#mensajes').append(`
        <div class="alert alert-success alert-dismissible fade show  mt-1" role="alert">
        Se agregó ${producto.nombre}
        <button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`);     
});
}

/* $('#categorias-botones')
    .append('<button id="pdv1" class="btn btn-info">Finalizar</button>')
    .on('click', () => {
        console.log('se dio click en finalizar');
    }); */