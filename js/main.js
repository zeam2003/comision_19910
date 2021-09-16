alert('Bienvenido a PartyApp!!!');

do{
    let option = parseInt(prompt(menu));
    if(option === 5) break;
    let qty = parseInt(prompt(SelectedQty));

    addToCart(option, qty);

    resp = prompt('Desea seguir comprando?  S/N');


} while (resp === "S");

if(compraAcumulada > 0) {
    alert(
        `** Detalle de su Compra: \n
         ## Items: $${compraAcumulada}\n
         ## Iva:    $${impuestos}\n
         ## Total: $${suma(compraAcumulada, impuestos)}
        `);
} 

alert('Gracias por su compra');
