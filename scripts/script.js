import { container_tarjetas, tarjeta_productos } from "./tarjetaProductos.js";

//Click Hamburguesa despleguie 
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


document.body.style.margin = "0";

const seccion_productos = document.getElementById("tarjeta-productos-js");


seccion_productos.append(container_tarjetas());




