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
        this.nombre = nombre;
    }

    cargarCategoria() {
        const categoriasDisponibles = JSON.parse(localStorage.getItem(`${this.nombre}`));

        if(categoriasDisponibles != null ){ 
            this.categorias = categoriasDisponibles;
        } else {
            this.categorias = [];
        }
    }

    agregarProducto(producto) {
        if (this.categorias.find(item => item.codigo == producto.codigo)) {
            return 'Este producto ya existe en el inventario';
        } else {
            this.categorias.push(producto);
            return 'Producto agregado exitosamente';
        }
    }

    actualizacionGeneral() {
        localStorage.setItem(`${this.nombre}`, JSON.stringify(this.categorias));
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
