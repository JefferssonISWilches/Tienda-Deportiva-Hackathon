document.addEventListener("DOMContentLoaded", () => {
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const botonesAgregar = document.querySelectorAll(".boton");
    const contenedorCarrito = document.getElementById("carrito");

    // Agregar producto al carrito
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const card = boton.closest(".card");

            const producto = {
                id: boton.dataset.id,
                titulo: card.querySelector(".titulo").textContent,
                precio: Number(card.querySelector(".precio").textContent),
                cantidad: 1
            };

            agregarAlCarrito(producto);
            guardarCarrito();
            mostrarCarrito();
        });
    });

    // Funcion para agregar productos
    function agregarAlCarrito(producto) {
        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }
    }

    // Funcion para mostrar el carrito en pantalla
    function mostrarCarrito() {
        contenedorCarrito.innerHTML = "";

        if (carrito.length === 0) {
            contenedorCarrito.innerHTML = "<p>El carrito esta vacio</p>";
            return;
        }

        carrito.forEach(prod => {
            const div = document.createElement("div");
            div.classList.add("item-carrito", "border", "p-2", "mb-2");

            div.innerHTML = `
                <h5>${prod.titulo}</h5>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>

                <button class="btn btn-success btn-sm sumar" data-id="${prod.id}">+</button>
                <button class="btn btn-warning btn-sm restar" data-id="${prod.id}">-</button>
                <button class="btn btn-danger btn-sm eliminar" data-id="${prod.id}">Eliminar</button>
            `;

            contenedorCarrito.appendChild(div);
        });

        mostrarTotal();
        activarBotonesCarrito();
    }

    // Botones sumar, restar y eliminar
    function activarBotonesCarrito() {
        document.querySelectorAll(".sumar").forEach(btn => {
            btn.addEventListener("click", () => {
                const item = carrito.find(p => p.id === btn.dataset.id);
                item.cantidad++;
                guardarCarrito();
                mostrarCarrito();
            });
        });

        document.querySelectorAll(".restar").forEach(btn => {
            btn.addEventListener("click", () => {
                const item = carrito.find(p => p.id === btn.dataset.id);
                if (item.cantidad > 1) {
                    item.cantidad--;
                } else {
                    carrito = carrito.filter(p => p.id !== item.id);
                }
                guardarCarrito();
                mostrarCarrito();
            });
        });

        document.querySelectorAll(".eliminar").forEach(btn => {
            btn.addEventListener("click", () => {
                carrito = carrito.filter(p => p.id !== btn.dataset.id);
                guardarCarrito();
                mostrarCarrito();
            });
        });
    }

    // Guardar carrito en localStorage
    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Mostrar total
    function mostrarTotal() {
        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

        const totalHTML = document.createElement("h4");
        totalHTML.textContent = "Total: $" + total;

        contenedorCarrito.appendChild(totalHTML);
    }

    // Mostrar carrito al cargar
    mostrarCarrito();
});
