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
const addToCart = (option, quantity) => {
    switch (option) {
        case 1:
            if(isStock(quantity, muzzaStock)) {
                buyProcess(quantity, muzzaPrice)
                muzzaStock -= quantity;
                alert(`Pizza Muzzarella agregada al carrito`);
            }
            break;
        case 2:
            if(isStock(quantity, napoStock)) {
                buyProcess(quantity, napoPrice);
                napoStock -= quantity;
                alert(`Pizza Napolitana agregada al carrito`);
            }
            break;
            
        case 3:
            if(isStock(quantity, jymStock)) {
                buyProcess(quantity, jymPrice);
                jymStock -= quantity;
                alert(`Pizza Jamon y Morrones agregada al carrito`);
            }
            break;    
            
        case 4:
            if(isStock(quantity, salameStock)) {
                buyProcess(quantity, salamePrice);
                salameStock -= quantity;
                alert(`Pizza Salame agregada al carrito`);
            }
            break;         
    
        default:
            alert('Opción no valida');
    }
    return true;
};

