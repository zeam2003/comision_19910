/*Variables generales para el desarrollo de Party App*/
const SelectedQty = `Cuantas quieres pedir?`;

let productsOnSale = [
    {
        id: 1,
        name: 'Grande de Muzza',
        price: 750,
        stock: 10
    },
    {
        id: 2,
        name: 'Napolitana',
        price: 850,
        stock: 3
    },
    {
        id: 3,
        name: 'Jamon y Queso',
        price: 800,
        stock: 4
    },
    {
        id: 4,
        name: 'Salame',
        price: 860,
        stock: 2
    },
]

class Producto {
    constructor( codigo, nombre, precio, stock, negocio) {
        //this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.negocio = negocio;
    }
}

class Categoria {
    constructor(nombre) {
        console.log(nombre);
        this.nombre = nombre;
    }

    cargarCategoria() {
        const categoriasDisponibles = JSON.parse(localStorage.getItem(`${this.nombre}`));
        console.log(this.nombre);
        if(categoriasDisponibles != null ){ 
            this.categorias = categoriasDisponibles;
            console.log('tragjo algo');
        } else {
            this.categorias = [];
            console.log('creo un arreglo vacio');
        }
    }

    agregarProducto(producto) {
        if (this.categorias.find(item => item.codigo == producto.codigo)) {
            console.log('busque');
            return 'Este producto ya existe en el inventario';
            
        } else {
            this.categorias.push(producto);
            console.log('agregue');
            console.log(this.categorias);
            return 'Producto agregado exitosamente';
        }
    }

    actualizacionGeneral() {
        localStorage.setItem(`${this.nombre}`, JSON.stringify(this.categorias));
        console.log(this.nombre, this.categorias);
    }

    mostrarProductos() {
        const contenedor = document.createElement('div');
        const nombreCategoria = document.createElement('h1');
        nombreCategoria.textContent = `Esta viendo la categoria: ${this.nombre}`;
        contenedor.appendChild(nombreCategoria);

        this.categorias.forEach(producto => {
            contenedor.appendChild(this.armarCard(producto));
        });

        document.body.appendChild(contenedor);
    }

    mostrarCargaCategoria() {
        let tituloFormCarga = document.getElementById('titulo-form-carga');
        let tituloFormIngreso = document.createElement('div')

        if (flagFormulario === true) {
            tituloFormIngreso.innerHTML = `
                <div class="text-center btn-little-gray mt-4 mb-4 " id="title-form-dos">
                    <h5>Nuevo Producto </h5>
                    <small>Estgamos agregandolo en la categoria ${this.nombre} </small>
                </div>
                <form class="row gy-2 gx-3 align-items-center " id="formDos">
                    <div class="col-auto">
                      <div class="input-group"> 
                        <div class="input-group-text">#</div>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="PLU o Barcode">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        
                        <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Producto">
                      </div>
                    </div>
                    <div class="col-auto">
                        <div class="input-group"> 
                            <div class="input-group-text">$</div>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Precio">
                          </div>
                    </div>

                    <div class="col-auto">
                        <div class="input-group"> 
                            <div class="input-group-text">u</div>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Stock">
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group">
                          
                          <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Negocio">
                        </div>
                      </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-primary">Cargar</button>
                    </div>
                  </form>
                  `
            tituloFormCarga.appendChild(tituloFormIngreso);


        } else {
            tituloFormIngreso.innerHTML = `
            <div class="text-center btn-little-gray mt-4 mb-4 " id="title-form-tres">
                    <h5>Verifique los datos</h5>
                    <small>Lo que ingresa en esta App se audtiará periodicamente  </small>
            </div>
            `
            tituloFormCarga.appendChild(tituloFormIngreso);
            
        }

        
    }

    

    armarCard(producto) {
        const card = document.createElement('div');
        card.classList.add('card');
       
        const nombreProducto = document.createElement('h4');
        nombreProducto.textContent = `${producto.nombre}`;
        card.appendChild(nombreProducto);

        const precioProducto = document.createElement('p');
        precioProducto.classList.add('price');
        precioProducto.textContent = `$ ${producto.precio}`;

        const stockProducto = document.createElement('p');
        stockProducto.textContent = `Stock: ${producto.stock}`;

        if ( producto.stock > 10 ) {
            stockProducto.classList.add('suficiente');
        } else {
            stockProducto.classList.add('poco');
        }
        card.appendChild(stockProducto);

        card.appendChild(precioProducto);

        return card;
    }

}



/*contadores*/
let cart = 0;
let compraAcumulada = 0;
let impuestosIva = 0;
let impuestos = 0;
let descuento = 0.12;

let resp = 'S';

let order = [];

let ingresoCategoria = '';
let flagCategoria = false;
let flagFormulario = false;
