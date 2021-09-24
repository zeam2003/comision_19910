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

/*contadores*/
let cart = 0;
let compraAcumulada = 0;
let impuestosIva = 0;
let impuestos = 0;
let descuento = 0.12;

let resp = 'S';

let order = [];
