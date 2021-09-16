/*Variables generales para el desarrollo de Party App*/

const menu = `Cual Pizza probamos hoy?: 
1.-Muzzarella
2.-Napolitana
3.-Jamon y Morrones
4.-Salame
5.-Salir
`;

const SelectedQty = `Cuantas quieres pedir?`;

/*Lista de Precios de Pizzas*/
const muzzaPrice  = 750;
const napoPrice   = 850;
const jymPrice    = 800;
const salamePrice = 860;

/*Lista de Stock*/
let muzzaStock  = 10;
let napoStock   = 3;
let jymStock    = 4;
let salameStock = 2;

/*contadores*/
let cart = 0;
let compraAcumulada = 0;
let impuestosIva = 0;
let impuestos = 0;

let resp = 'S';
