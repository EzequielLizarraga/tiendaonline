


class Item {
    constructor(nombre, precio, tipo, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}

const shop = [
    new Item("Servilleta", 500, "papel", "Una servilleta."),
    new Item("Papel Higienico", 1000, "papel", "Un papel higienico."),
    new Item("Toalla intercalada", 800, "papel", "Un seca manos."),
    new Item("Detergente", 300, "limpieza", "Un detergente limpiador."),
];


let cliente = {
    carrito: [],
    dinero: 15000,
};

if (localStorage.getItem("cliente")) {
    cliente = parseInt(localStorage.getItem("cliente"));
  }

function comprar_prompt() {
    const item_a_comprar = prompt("¿Qué deseas comprar?");
    comprar_item(item_a_comprar);
}

function eliminar_prompt() {
    const item_a_eliminar = prompt("¿Qué deseas Eliminar?");
    eliminar_item(item_a_eliminar);
}

function comprar_item(prompt) {
    let item_a_comprar = false;
    for (item of shop) {
      if (item.nombre == prompt) {
        item_a_comprar = item;
      }
    }
  
    if (item_a_comprar) {
      if (cliente.dinero >= item_a_comprar.precio) {
        cliente.dinero = cliente.dinero - item_a_comprar.precio;
        localStorage.setItem("cliente.dinero", cliente.dinero);
        cliente.carrito.push(item_a_comprar);
        localStorage.setItem("cliente.carrito", JSON.stringify(cliente.carrito));
        console.log("¡Compraste " + item_a_comprar.nombre + "!");
      } else {
        console.warn(
          "No tenés dinero suficiente para comprar " +
            item_a_comprar.nombre +
            ". Tu dinero es: " +
            cliente.dinero +
            ". Costo del producto: " +
            item_a_comprar.precio
        );
      }
    } else {
      console.error("No tengo nada de '" + prompt + "' disponible a la venta.");
    }
  }

function eliminar_item(prompt) {
    let item_a_eliminar = false;
    for (item of cliente.carrito) {
      if (item.nombre == prompt) {
        item_a_eliminar = item;
      }
    }
    if (item_a_eliminar) {
      const indice = cliente.carrito.indexOf(item_a_eliminar);
      cliente.carrito.splice(indice, 1);
      localStorage.setItem("cliente", JSON.stringify(cliente.carrito));
      console.log("¡Eliminaste " + item_a_eliminar.nombre + "!");
      cliente.dinero = cliente.dinero + item_a_eliminar.precio;
      localStorage.setItem("cliente", cliente.dinero);
      mostrar_carrito();
    } else {
      console.error("No tenés ningun item para eliminar.");
    }
  }
  
  function mostrar_carrito() {
    console.log("Carrito:");
    for (item_carrito of cliente.carrito) {
      console.log("- " + item_carrito.nombre);
    }
    console.log("Dinero:", cliente.dinero);

  }


