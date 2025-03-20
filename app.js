let cliente = {
  nombre: null,
  carrito: [],
  dinero: 0,
};

if (localStorage.getItem("cliente")) {
cliente = JSON.parse(localStorage.getItem("cliente"));
}

while (!cliente.nombre) {
cliente.nombre = prompt ("Cual es tu nombre?")
guardar_datos();
} 

function guardar_datos(){
localStorage.setItem("cliente", JSON.stringify(cliente));
}

mostrar_informacion_cliente();

function mostrar_informacion_cliente() {
const els_cliente_nombre = document.querySelectorAll(".cliente_nombre");
els_cliente_nombre.forEach((el) => (el.innerText = cliente.nombre));

const els_cliente_dinero = document.querySelectorAll(".cliente_dinero");
els_cliente_dinero.forEach((el) => (el.innerText = cliente.dinero));

const el_carrito = document.querySelector("#carrito");
el_carrito.innerHTML = "";
cliente.carrito.forEach ((item) => {
el_carrito.innerHTML += `<img src="img/${item.imagen}"  data-id="${item.id}" class="item_a_eliminar" title="Nombre : ${item.nombre} - Precio : ${item.precio}"/>`;
});

const els_inventario = document.querySelectorAll(".item_a_eliminar");
els_inventario.forEach((el) => {
  el.addEventListener("click", (event) => {
    eliminar_item(event.target.getAttribute("data-id"));
  });
});
}


class Item {
  constructor(id, nombre, precio, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
  }
}

const shop = [
  new Item(1, "Servilleta", 500, "sussex.png"),
  new Item(2, "Papel Higienico", 1000, "papelh.png"),
  new Item(3, "Toalla intercalada", 800, "toalla.png"),
  new Item(4, "Detergente", 300, "detergente.png"),
  new Item(5, "Jabon liquido", 700, "jabon_liquido.png"),
  new Item(6, "Desengrasante", 1800, "desengrasante.png"),
  new Item(7, "Guantes de nitrilo", 3800, "nitrilo.png"),
  new Item(8, "Detergente", 2300, "arranque.png"),
];

const el_items_a_la_venta = document.querySelector("#items_a_la_venta");
el_items_a_la_venta.innerHTML = "";
shop.forEach((item) => {
el_items_a_la_venta.innerHTML += `<img src="img/${item.imagen}"  data-id="${item.id}" class="item_a_comprar" title="Nombre : ${item.nombre} - Precio : ${item.precio}"/>`;
});

const els_a_la_venta = document.querySelectorAll(".item_a_comprar");
els_a_la_venta.forEach((el) => {
el.addEventListener("click", (event) =>{
  comprar_item(event.target.getAttribute("data-id"));
});
});


function comprar_item(id){
const item_a_comprar = shop.find((item) => item.id === Number(id));
if (item_a_comprar){
  cliente.carrito.push(item_a_comprar);
  cliente.dinero += item_a_comprar.precio;
  mostrar_informacion_cliente();
  guardar_datos();
}
}

function eliminar_item(id) {
const item_a_eliminar = cliente.carrito.find((item) => item.id === Number(id));
if(item_a_eliminar) {
  const indice = cliente.carrito.findIndex((item) => item.id === Number(id));
  cliente.carrito.splice(indice, 1);
  cliente.dinero -= item_a_eliminar.precio;
  mostrar_informacion_cliente();
  guardar_datos();
}
}

const titulo = document.querySelector("h1");