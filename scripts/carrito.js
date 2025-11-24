document.addEventListener("DOMContentLoaded", () => {

    // Esperamos un poco a que las tarjetas se generen
    setTimeout(() => {

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const botonesAgregar = document.querySelectorAll(".agregar-carrito");
        const contenedorCarrito = document.getElementById("carrito");

        // Agregar producto al carrito
        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", () => {

                const card = boton.closest(".tarjeta-producto");

                const titulo = card.querySelector("h3").textContent;

                // Buscar el precio de forma segura
                const precioTexto = card.querySelector(".precio-preducto").textContent;
                const precio = Number(precioTexto.replace("Valor $", ""));

                const producto = {
                    id: titulo,
                    titulo: titulo,
                    precio: precio,
                    cantidad: 1
                };

                agregarAlCarrito(producto);
                guardarCarrito();
                mostrarCarrito();
            });
        });

        function agregarAlCarrito(producto) {
            const existe = carrito.find(item => item.id === producto.id);

            if (existe) {
                existe.cantidad++;
            } else {
                carrito.push(producto);
            }
        }

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

        function guardarCarrito() {
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        function mostrarTotal() {
            const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

            const totalHTML = document.createElement("h4");
            totalHTML.textContent = "Total: $" + total;

            contenedorCarrito.appendChild(totalHTML);
        }

        mostrarCarrito();

    }, 300); // Esperamos 0.3s

});
