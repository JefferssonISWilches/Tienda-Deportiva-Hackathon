
class Productos { 
    constructor(nombre, descripcion, precio, imagen, categoria){
        this.nombre = nombre;
        this.descripcion = descripcion; 
        this.precio = precio; 
        this.imagen = imagen;
        this.categoria = categoria;
    }
    getImagen(){
        return this.imagen; 
    }

    getNombre(){
        return this.nombre;
    }

    getDescripcion(){
        return this.descripcion;
    }
    getPrecio(){
        return this.precio;
    }
    getCategoria(){
        return this.categoria;
    }
}


const producto1 = new Productos("Zapatillas Adidas Classic Runner", "Tenis deportivos color gris claro con detalles oscuros. Diseño cómodo y ligero para entrenamiento o uso diario.", 229.900,'/img/adidas.png',"Zapatillas");
const producto2 = new Productos("Zapatillas Adidas Multicolor Street ", " Tenis multicolor estilo urbano. Suela resistente y diseño llamativo ideal para combinar con outfits modernos.", 259.900, '/img/adidas1.png',"Zapatillas");
const producto3 = new Productos("Zapatillas Adidas Blue Sport", " Tenis deportivos azules con franjas blancas. Perfectos para running, gym o uso casual.", 239.900, '/img/adidas2.png', "Zapatillas");
const producto4 = new Productos("Hoodie Deportivo Logo Classic", "Buzo negro con capucha y logo blanco grande. Material suave y cómodo, ideal para clima fresco.", 149.900, "","Hoodies" );
const producto5 = new Productos("Chaqueta Deportiva Blue Training", "Chaqueta azul oscura con líneas blancas en las mangas. Cremallera completa y capucha. Ideal para entrenamiento.", 169.900,"Chaquetas");
const producto6 = new Productos("Camiseta Training White Edition", " Camiseta deportiva blanca con detalles en negro. Tela transpirable, perfecta para entrenar o uso diario.", 79.900,'/img/camisa1.png', "Camisetas" );
const producto7 = new Productos("Camiseta Logo Street Black", "Camiseta negra casual con logo grande en color blanco. Estilo urbano y moderno.", 69.900, "Camisetas" );
const producto8 = new Productos("Camiseta Sport Blue Edition", "Camiseta deportiva azul con mangas blancas. Tela liviana y fresca para actividades físicas.", 74.900,'/img/camisa2.png',"Camisetas")
const producto9 = new Productos("Pantalón Deportivo Black Fit ", "Pantalón negro ajustado con línea blanca lateral. Ideal para gym, correr o uso casual.", 99.900,"Pantalónes")

//se crea Container div que esta dentro de la seccion tarjeta-productos-js para mostrar las tarjetas de productos: 

function container_tarjetas() {
    const container_tarjetas = document.createElement("div");
    container_tarjetas.classList.add("container-tarjetas");
   
    container_tarjetas.appendChild(tarjeta_productos(producto1.getNombre(),producto1.getDescripcion(),producto1.getPrecio(),producto1.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto2.getNombre(),producto2.getDescripcion(),producto2.getPrecio(),producto2.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto3.getNombre(),producto3.getDescripcion(),producto3.getPrecio(),producto3.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto4.getNombre(),producto4.getDescripcion(),producto4.getPrecio(),producto4.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto5.getNombre(),producto5.getDescripcion(),producto5.getPrecio(),producto5.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto6.getNombre(),producto6.getDescripcion(),producto6.getPrecio(),producto6.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto7.getNombre(),producto7.getDescripcion(),producto7.getPrecio(),producto7.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto8.getNombre(),producto8.getDescripcion(),producto8.getPrecio(),producto8.getImagen()));
    container_tarjetas.appendChild(tarjeta_productos(producto9.getNombre(),producto9.getDescripcion(),producto9.getPrecio(),producto9.getImagen()));
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
    nombre_producto.style.color = "#000000";
    nombre_producto.style.textAlign = "start";
    nombre_producto.style.marginTop = "5px";
    nombre_producto.style.marginBottom = "5px";

    //Descripcion 

    const descripcion_producto = document.createElement("p");
    descripcion_producto.classList.add("descripcion-producto");
    descripcion_producto.innerText = descripcion;
    descripcion_producto.style.color = "#000000";
    descripcion_producto.style.marginTop = "5px";
    descripcion_producto.style.marginBottom = "5px";

    //precio

    const precio_producto = document.createElement("p");
    precio_producto.classList.add("precio-preducto");
    precio_producto.innerText = 'Valor $' + precio;
    precio_producto.style.color = "#000000";
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

export { container_tarjetas, tarjeta_productos };