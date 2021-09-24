/*Funciones para PartyApp */

/*Verifica si hay stock comprando lo que pide el usuario */
const isStock = (quantity, stock) => {
    if(quantity > stock) {
        alert(`No hay stock suficiente para este pedido, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
};

/*Realiza la compra */
const buyProcess = (quantity, price) => {
    cart += (quantity * price);
    impuestosIva = iva(cart);
    const desc1 = new Descuento(cart, impuestosIva)
    desc1.aplicarDescuento()
    compraSuma(cart, impuestosIva);
    cart = 0;
    impuestosIva = 0;
}

/*Calcula Iva*/
const iva = (x) => x * 0.21;

/* Suma totales acumulados durante todo el proceso de compra*/
const compraSuma = ( a, b ) => {
    compraAcumulada += a;
    impuestos += b;
}

/* Suma básica */
const suma = (a,b) => a + b;

/*Ejecuta el agregado de los items al carrito 
    recibe option = la opcion seleccionada por el usuario
    qty = la cantidad de items de lo seleccionado
*/

class Descuento {
    constructor(cart, impuestosIva) {
        this.desCart = parseFloat(cart);
        this.descImpuesto = parseFloat(impuestosIva)
    }
    aplicarDescuento() {
        this.desCart = (cart - (cart * descuento))
        cart = this.desCart;
        this.descImpuesto = ( impuestosIva - ( impuestosIva * descuento));
        impuestosIva = this.descImpuesto;
        console.log('Se aplicaron descuentos!');
    }
}

//realiza la busqueda en el Array, luego opera con este para calcular stock y precio, ademas realiza el descuento de stock//
const addToCart = (option, quantity) => {
    let found = productsOnSale.find(product =>  product.id === option );
    console.log(option);
    if(isStock(quantity, found.stock)){
        buyProcess(quantity, found.price);
        productsOnSale[option-1].stock -= quantity;
        alert(`${found.name} fue agregado al carrito! $${compraAcumulada}` );
    }
}

//Ejecuta el Menu de forma dinamica, segun los elementos del Array//
const initialMenu = () => {
    let menu = "Elija una opción: \n";
    /*function SortArray(x, y) {
        return x.name.localeCompare(y.name);
    }
    let order = productsOnSale.sort(SortArray);
    console.log(order);*/
    productsOnSale.forEach((product, i) => {
            menu += + i+1 + ".-" + product.name + '\n';
    });
    menu += (productsOnSale.length + 1) + ".-Salir" ;
    return parseInt(prompt(menu));
}
