alert('Bienvenido a PartyApp!!!');

do{
    let option = initialMenu();
    if(option === productsOnSale.length + 1) break;
    let qty = parseInt(prompt(SelectedQty));

    addToCart(option, qty);

    resp = prompt('Desea seguir comprando?  S/N');


} while (resp === "S" || resp === "s");

if(compraAcumulada > 0) {
    alert(
        `** Detalle de su Compra: \n
         ## Items: $${compraAcumulada}\n
         ## Iva:    $${impuestos}\n
         ## Total: $${suma(compraAcumulada, impuestos) }
        `);
} 

alert('Gracias, vuelva pronto');
