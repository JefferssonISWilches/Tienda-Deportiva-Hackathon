
//Click Hamburguesa despleguie 
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.body.style.margin = "0";

const seccion_productos = document.getElementById("tarjeta-productos-js");


seccion_productos.append(container_tarjetas());



//se crea Container div que esta dentro de la seccion tarjeta-productos-js para mostrar las tarjetas de productos: 

function container_tarjetas() {
    const container_tarjetas = document.createElement("div");
    container_tarjetas.classList.add("container-tarjetas");

    container_tarjetas.appendChild(tarjeta_productos("juguete", "carrito de color rojo", 20));
    return container_tarjetas;

}

//Se crea la tarjeta de productos y 
function tarjeta_productos(nombre, descripcion, precio, img) {

    //container de la tarjeta
    const tarjeta_productos = document.createElement("div");
    tarjeta_productos.classList.add("tarjeta-producto");


    //Imagen
    const imagen_producto = document.createElement("img");
    imagen_producto.classList.add("imagen-producto");
    imagen_producto.src = img;
    imagen_producto.style.width = "100%";
    imagen_producto.style.height = "50%";
    imagen_producto.style.backgroundColor = "#f0f0f0"

    //nombre
    const nombre_producto = document.createElement("h3");
    nombre_producto.classList.add("nombre-articulo");
    nombre_producto.innerText = nombre;
    nombre_producto.style.color = "#ffffff";
    nombre_producto.style.textAlign = "start";
    nombre_producto.style.marginTop = "5px";
    nombre_producto.style.marginBottom = "5px";
    nombre_producto.style.fontFamily = "";

    //Descripcion 

    const descripcion_producto = document.createElement("p");
    descripcion_producto.classList.add("descripcion-producto");
    descripcion_producto.innerText = descripcion;
    descripcion_producto.style.color = "#ffffff";
    descripcion_producto.style.marginTop = "5px";
    descripcion_producto.style.marginBottom = "5px";

    //precio

    const precio_producto = document.createElement("p");
    precio_producto.classList.add("precio-preducto");
    precio_producto.innerText = 'Valor $' + precio;
    precio_producto.style.color = "#ffffff";
    precio_producto.style.marginTop = "5px";
    precio_producto.style.marginBottom = "5px";

    //boton
    const boton_carrito = document.createElement("button");
    boton_carrito.classList.add("agregar-carrito");
    boton_carrito.type = "button";
    boton_carrito.innerText = "🛒";
    boton_carrito.style.width = "40px"


    //agregar todos los componentes a la tarjeta
    tarjeta_productos.append(imagen_producto, nombre_producto, descripcion_producto, precio_producto, boton_carrito);

    return tarjeta_productos;
}   