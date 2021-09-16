alert('Bienvenido a PartyApp!!!');

do{
    let option = parseInt(prompt(menu));
    if(option === 5) break;
    let qty = parseInt(prompt(SelectedQty));

    addToCart(option, qty);

    resp = prompt('Desea seguir comprando?  S/N');


} while (resp === "S");

if(cart > 0) {
    alert(`Su compra tiene un total de $${cart}`);
}

alert('Gracias por su compra');
