
const shop = ["Servilleta", "Papel higienico", "Toalla intercalada", "Detergente"];
const precio_x_producto = 500;

const mi_carrito = [];
let mi_dinero = 1500;

function comprar_prompt() {
const item_a_comprar = prompt("¿Qué deseas comprar?");
comprar_item(item_a_comprar);
}

function vender_prompt() {
const item_a_vender = prompt("¿Qué deseas vender?");
vender_item(item_a_vender);
}


function comprar_item(item) {
if (shop.includes(item)) {
    if (mi_dinero >= precio_x_producto) {
    mi_dinero = mi_dinero - precio_x_producto;
    const indice = shop.indexOf(item);
    mi_carrito.push(shop[indice]);
    console.log("¡Compraste " + item + "!");
    } else {
    console.warn(
        "No tenés dinero suficiente para comprar " +
        item +
        ". Tu dinero es: " +
        mi_dinero +
        ". El costo del producto es:$ " +
        precio_x_producto
    );
    }
} else {
    console.error("No tengo nada de '" + item + "' disponible a la venta.");
}
}


function vender_item(item) {
if (mi_carrito.includes(item)) {
    const indice = mi_carrito.indexOf(item);
    mi_carrito.splice(indice, 1);
    console.log("¡Vendiste " + item + "!");
    mi_dinero = mi_dinero + precio_x_producto;
    mostrar_carrito();
} else {
    console.error("No tenés nada de '" + item + "' para vender.");
}
}

function mostrar_carrito() {
console.log("Tu Carrito:");
for (let indice = 0; indice < mi_carrito.length; indice++) {
    console.log(mi_carrito[indice]);
}
console.log("Tu dinero:$", mi_dinero);
}

function mostrar_shop() {
    console.log("Los productos disponibles son:");
    for (let indice = 0; indice < shop.length; indice++) {
        console.log(shop[indice]);
    }
    }