/*Funciones para PartyApp */

/*Verifica si hay stock comprando lo que pide el usuario */
const isStock = (quantity, stock) => {
    if(quantity > stock) {
        alert(`No hay stock suficiente para este pedido, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
};

/*Ejecuta el agregado de los items al carrito 
    recibe option = la opcion seleccionada por el usuario
    qty = la cantidad de items de lo seleccionado
*/
const addToCart = (option, quantity) => {
    switch (option) {
        case 1:
            if(isStock(quantity, muzzaStock)) {
                cart += (quantity * muzzaPrice);
                muzzaStock -= quantity;
                alert(`Pizza Muzzarella agregada al carrito`);
            }
            break;
        case 2:
            if(isStock(quantity, napoStock)) {
                cart += (quantity * napoPrice);
                napoStock -= quantity;
                alert(`Pizza Napolitana agregada al carrito`);
            }
            break;
            
        case 3:
            if(isStock(quantity, jymStock)) {
                cart += (quantity * jymPrice);
                jymStock -= quantity;
                alert(`Pizza Jamon y Morrones agregada al carrito`);
            }
            break;    
            
        case 4:
            if(isStock(quantity, salameStock)) {
                cart += (quantity * salamePrice);
                salameStock -= quantity;
                alert(`Pizza Salame agregada al carrito`);
            }
            break;         
    
        default:
            alert('Opción no valida');
    }
    return true;
};

