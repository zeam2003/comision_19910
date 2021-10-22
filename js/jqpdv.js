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

  const APIURL = "https://jsonplaceholder.typicode.com/posts";

    $("#categorias-botones").prepend(
        `<button id="btn-prueba" type="button" class="btn btn-primary">Consulta Ajax de Prueba</button>`
    );
        
    $('#btn-prueba').click(() => {
        $.ajax({
            method: "GET",
            url: APIURL,
            success: function (res) {
                console.log('cargue2');
                for (const {id, title, body} of res){
                    $('#categorias-botones').append(
                        `
                        <div class="col-3 mt-5">
                            <div class="card">
                                <h5 class="card-header>${id}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${body}</p>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            }
         });
    });
       
  



  


  // Se comenta para realiar entregable
    /* for (const producto of productos) {
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
    */

});


function dev () {
    
}

$('nav').slideDown(2000);
$('#contenedor').fadeIn(2000);
