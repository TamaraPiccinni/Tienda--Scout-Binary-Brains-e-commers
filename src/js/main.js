// main.js

// Importa la variable productos desde app.js
import { productos } from './app.js';

// Configuración inicial
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

// Lógica de agregar productos al carrito
function agregarAlCarrito(e) {
    // Mostrar una notificación de producto agregado
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
          },
        onClick: function(){}
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Inicialización
botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});



// // Inicializar un array vacío para almacenar los productos
// let productos = [];

// // Realizar una solicitud Fetch para obtener datos de productos desde un archivo JSON
// fetch("./js/productos.json")
//     .then(response => response.json())
//     .then(data => {
//         productos = data;
//         cargarProductos(productos);
//     });

// // Obtener referencias a elementos del DOM
// const contenedorProductos = document.querySelector("#contenedor-productos");
// const botonesCategorias = document.querySelectorAll(".boton-categoria");
// const tituloPrincipal = document.querySelector("#titulo-principal");
// let botonesAgregar = document.querySelectorAll(".producto-agregar");
// const numerito = document.querySelector("#numerito");

// // Ocultar un elemento con la clase "aside-visible" cuando se hace clic en botones de categoría
// botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
//     aside.classList.remove("aside-visible");
// }));

// // Función para cargar y mostrar productos en el contenedor de productos
// function cargarProductos(productosElegidos) {

//     // Limpiar el contenedor de productos
//     contenedorProductos.innerHTML = "";

//     productosElegidos.forEach(producto => {

//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
//             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//             <div class="producto-detalles">
//                 <h3 class="producto-titulo">${producto.titulo}</h3>
//                 <p class="producto-precio">$${producto.precio}</p>
//                 <button class="producto-agregar" id="${producto.id}">Agregar</button>
//             </div>
//         `;

//         contenedorProductos.append(div);
//     });

//     actualizarBotonesAgregar();
// }

// // Manejar clic en los botones de categoría
// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         // Cambiar la clase "active" para resaltar el botón de categoría seleccionado
//         botonesCategorias.forEach(boton => boton.classList.remove("active"));
//         e.currentTarget.classList.add("active");

//         if (e.currentTarget.id != "todos") {
//             // Filtrar productos por categoría y actualizar la vista
//             const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
//             tituloPrincipal.innerText = productoCategoria.categoria.nombre;
//             const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
//             cargarProductos(productosBoton);
//         } else {
//             // Mostrar todos los productos si se selecciona la categoría "todos"
//             tituloPrincipal.innerText = "Todos los productos";
//             cargarProductos(productos);
//         }
//     });
// });

// // Función para actualizar los botones "Agregar" en la página
// function actualizarBotonesAgregar() {
//     botonesAgregar = document.querySelectorAll(".producto-agregar");

//     botonesAgregar.forEach(boton => {
//         boton.addEventListener("click", agregarAlCarrito);
//     });
// }

// // Inicializar un array para almacenar productos en el carrito de compras
// let productosEnCarrito;

// // Obtener productos en el carrito desde el almacenamiento local, si existen
// let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// if (productosEnCarritoLS) {
//     productosEnCarrito = JSON.parse(productosEnCarritoLS);
//     actualizarNumerito();
// } else {
//     productosEnCarrito = [];
// }

// // Función para agregar un producto al carrito
// function agregarAlCarrito(e) {
//     // Mostrar una notificación de producto agregado
//     Toastify({
//         text: "Producto agregado",
//         duration: 3000,
//         close: true,
//         gravity: "top", // `top` o `bottom`
//         position: "right", // `left`, `center` o `right`
//         stopOnFocus: true, // Evita el cierre de la notificación al pasar el cursor sobre ella
//         style: {
//           background: "linear-gradient(to right, #4b33a8, #785ce9)",
//           borderRadius: "2rem",
//           textTransform: "uppercase",
//           fontSize: ".75rem"
//         },
//         offset: {
//             x: '1.5rem', // Eje horizontal - puede ser un número o una cadena que indique unidad. Ejemplo: '2em'
//             y: '1.5rem' // Eje vertical - puede ser un número o una cadena que indique unidad. Ejemplo: '2em'
//           },
//         onClick: function(){} // Devolución de llamada después de hacer clic en la notificación
//     }).showToast();

//     // Obtener el ID del producto desde el botón "Agregar" que se hizo clic
//     const idBoton = e.currentTarget.id;
//     const productoAgregado = productos.find(producto => producto.id === idBoton);

//     if(productosEnCarrito.some(producto => producto.id === idBoton)) {
//         // Si el producto ya está en el carrito, aumentar su cantidad
//         const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//         productosEnCarrito[index].cantidad++;
//     } else {
//         // Si es un producto nuevo, establecer su cantidad en 1 y agregarlo al carrito
//         productoAgregado.cantidad = 1;
//         productosEnCarrito.push(productoAgregado);
//     }

//     // Actualizar el número en el icono del carrito
//     actualizarNumerito();

//     // Guardar los productos en el carrito en el almacenamiento local
//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
// }

// // Función para actualizar el número en el icono del carrito
// function actualizarNumerito() {
//     let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
//     numerito.innerText = nuevoNumerito;
// }
