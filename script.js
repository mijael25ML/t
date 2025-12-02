// Esta función se ejecuta cuando haces clic en el botón.
function mostrarAlerta() {
// confirm().
const confirmacion = confirm('¿Estás seguro de que quieres registrarte?');
if (!confirmacion) {
alert('Registro cancelado.');
return; 
}
// getElementById.
const nombreInput = document.getElementById('nombre');
let nombre = nombreInput.value; 
// prompt, si esta vacio() .
if (!nombre) {
nombre = prompt('Por favor, escribe tu nombre:', 'Anónimo');
}
// alert().
alert('¡HOLA, BIENVENIDO ' + (nombre || 'invitado') + '!');  
// querySelector.
const tituloContacto = document.querySelector('#contacto h2');
tituloContacto.style.color = '#235bccff'; 
}


// Esta función se ejecuta cuando el usuario elige una nueva opción en el menú desplegable.
function actualizarConsulta() {
// getElementById.
const selectElement = document.getElementById('tipo-consulta');

// querySelector.
const opcionSeleccionadaSpan = document.querySelector('#opcion-seleccionada');
opcionSeleccionadaSpan.textContent = selectElement.value;
}

// MENÚ RESPONSIVO (HAMBURGUESA)
const btnMenu = document.getElementById('btn-menu');
const navList = document.querySelector('nav ul');

btnMenu.addEventListener('click', () => {
navList.classList.toggle('active');
});

// --- MODAL / VENTANA FLOTANTE ---
const modal = document.getElementById('modal');
const btnModal = document.getElementById('btnModal');
const cerrarModal = document.getElementById('cerrarModal');

btnModal.addEventListener('click', () => {
modal.style.display = 'flex';
});

cerrarModal.addEventListener('click', () => {
modal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener('click', (evento) => {
if (evento.target === modal) {
    modal.style.display = 'none';
}
});

// Arreglo de productos
const productos = ["Teclado", "Mouse", "Monitor", "Parlantes"];

// Función que recorre el arreglo y muestra los productos
function mostrarProductos() {
    let lista = "";

    for (let i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i] + "<br>";
    }

    if (productos.length > 0) {
        document.getElementById("listaProductos").innerHTML = lista;
    } else {
        document.getElementById("listaProductos").innerHTML = "No hay productos disponibles.";
    }
}

// --- DESCRIPCIONES DE PRODUCTOS ---
const descripcionesProductos = {
    "asus-rog": {
        nombre: "Asus ROG Strix",
        descripcion: "Laptop gamer de alto rendimiento con procesador Intel Core i7 de última generación, 16GB de RAM DDR4, almacenamiento SSD de 512GB para carga ultrarrápida, tarjeta gráfica NVIDIA RTX 3060, pantalla Full HD de 15.6 pulgadas con 144Hz de refresco, teclado RGB retroiluminado, y sistema de refrigeración avanzado. Perfecta para gaming y trabajo intensivo.",
        precio: "$1200",
        caracteristicas: ["16GB RAM DDR4", "512GB SSD", "NVIDIA RTX 3060", "Pantalla 144Hz", "Teclado RGB"]
    },
    "samsung-s24": {
        nombre: "Samsung Galaxy S24",
        descripcion: "Smartphone flagship con pantalla Dynamic AMOLED 2X de 6.2 pulgadas, procesador Snapdragon 8 Gen 3, 8GB de RAM, 256GB de almacenamiento interno, cámara triple de 50MP con zoom óptico 3x, batería de 4000mAh con carga rápida inalámbrica, resistencia al agua IP68, y sistema operativo Android 14. Diseño premium con marco de titanio.",
        precio: "$900",
        caracteristicas: ["Pantalla AMOLED 6.2\"", "8GB RAM", "256GB almacenamiento", "Cámara 50MP", "Resistente al agua"]
    },
    "galaxy-buds": {
        nombre: "Galaxy Buds FE",
        descripcion: "Audífonos inalámbricos True Wireless con cancelación activa de ruido (ANC), calidad de sonido Hi-Fi, batería de hasta 30 horas con estuche de carga, resistencia al agua IPX2, micrófonos con cancelación de ruido para llamadas claras, y conexión Bluetooth 5.2. Diseño ergonómico para máximo confort durante horas de uso.",
        precio: "$150",
        caracteristicas: ["Cancelación de ruido ANC", "30h de batería", "Bluetooth 5.2", "Resistente al agua", "Sonido Hi-Fi"]
    },
    "tablet-samsung": {
        nombre: "Tablet Samsung Galaxy",
        descripcion: "Tablet Android de 10.4 pulgadas con pantalla TFT de alta resolución, procesador octa-core, 3GB de RAM, 32GB de almacenamiento expandible hasta 1TB, cámara trasera de 8MP y frontal de 5MP, batería de 7040mAh con carga rápida, y S Pen incluido. Ideal para trabajo, estudio y entretenimiento multimedia.",
        precio: "$150",
        caracteristicas: ["Pantalla 10.4\"", "3GB RAM", "32GB + expansión", "S Pen incluido", "Batería 7040mAh"]
    },
    "teclado-gamer": {
        nombre: "Teclado Gamer Microics Fisher K801",
        descripcion: "Teclado mecánico gaming con switches RGB personalizables, retroiluminación LED multicolor, diseño ergonómico con reposamuñecas incluido, teclas anti-ghosting para gaming competitivo, construcción duradera de aluminio, y compatibilidad con Windows, Mac y Linux. Perfecto para gamers y profesionales que buscan precisión y estilo.",
        precio: "$150",
        caracteristicas: ["Switches RGB", "Retroiluminación LED", "Anti-ghosting", "Reposamuñecas", "Multiplataforma"]
    },
    "mouse-logitech": {
        nombre: "Mouse Logitech G502",
        descripcion: "Mouse gaming de precisión con sensor HERO 25K de alta precisión, 11 botones programables, sistema de pesas ajustables, iluminación RGB LIGHTSYNC, scroll infinito, y diseño ergonómico para agarre cómodo. Compatible con software Logitech G HUB para personalización avanzada. El mouse preferido por gamers profesionales.",
        precio: "$150",
        caracteristicas: ["Sensor HERO 25K", "11 botones programables", "Pesas ajustables", "RGB LIGHTSYNC", "Scroll infinito"]
    }
};

// --- MODAL DE PRODUCTO ---
const modalProducto = document.getElementById("modalProducto");
const cerrarModalProducto = document.getElementById("cerrarModalProducto");
const contenidoProducto = document.getElementById("contenidoProducto");
const enlacesVerMas = document.querySelectorAll(".ver-mas");

// Agregar evento a cada enlace "Ver más"
enlacesVerMas.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const productoId = enlace.getAttribute("data-producto");
        const producto = descripcionesProductos[productoId];
        
        if (producto) {
            contenidoProducto.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p class="precio-producto">Precio: ${producto.precio}</p>
                <div class="descripcion-producto">
                    <h3>Descripción:</h3>
                    <p>${producto.descripcion}</p>
                </div>
                <div class="caracteristicas-producto">
                    <h3>Características principales:</h3>
                    <ul>
                        ${producto.caracteristicas.map(car => `<li><i class="fas fa-check-circle"></i> ${car}</li>`).join("")}
                    </ul>
                </div>
            `;
            modalProducto.style.display = "flex";
        }
    });
});

// Cerrar modal de producto
cerrarModalProducto.addEventListener("click", () => {
    modalProducto.style.display = "none";
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener("click", (evento) => {
    if (evento.target === modalProducto) {
        modalProducto.style.display = "none";
    }
});
