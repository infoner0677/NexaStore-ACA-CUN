// Funcionalidad 1: Contador y cálculo del Carrito de Compras
let totalProductos = 0;
let totalPrecio = 0;

function agregarAlCarrito(nombreProducto, precio) {
    totalProductos++;
    totalPrecio += precio;
    
    // Actualizar el DOM
    const contadorElem = document.getElementById('carrito-contador');
    if (contadorElem) {
        contadorElem.innerText = `🛒 Carrito: ${totalProductos} (${totalPrecio.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})})`;
    }
    
    alert(`¡${nombreProducto} fue agregado al carrito exitosamente!`);
}

// Funcionalidad 2: Validación y manejo del Formulario de Contacto
document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById('form-contacto');
    
    if (formContacto) {
        formContacto.addEventListener('submit', function(event) {
            event.preventDefault(); // Detener envío por defecto
            
            const nombre = document.getElementById('nombre').value;
            alert(`Gracias por escribirnos, ${nombre}. Hemos recibido tu mensaje correctamente.`);
            
            formContacto.reset(); // Limpiar formulario
        });
    }
});