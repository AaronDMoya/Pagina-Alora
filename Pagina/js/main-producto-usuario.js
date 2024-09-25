// Función para alternar el overlay de categorías
document.querySelector('.botonestilo1').addEventListener('click', function() {
    this.classList.toggle('activo'); // Alterna la clase 'activo' en el botón
    
    const overlay = document.getElementById('overlay-categorias'); // Obtiene el elemento del overlay
    if (this.classList.contains('activo')) { // Verifica si el botón tiene la clase 'activo'
        overlay.style.display = 'block'; // Muestra el overlay

        // Obtiene la posición del botón
        const rect = this.getBoundingClientRect();
        // Ajusta la posición del overlay
        overlay.style.top = `${rect.bottom + 15}px`; // Coloca el overlay 10px debajo del botón
        overlay.style.left = `${rect.left + 4}px`; // Alinea el overlay con el borde izquierdo del botón
    } else {
        overlay.style.display = 'none'; // Oculta el overlay si el botón no tiene la clase 'activo'
    }
});

// Función para alternar el overlay de usuarios
document.querySelector('.boton-usuario').addEventListener('click', function() {
    const overlayUsuarios = document.getElementById('opusuarios-overlay');
    overlayUsuarios.style.display = (overlayUsuarios.style.display === 'block') ? 'none' : 'block';

    const rect = this.getBoundingClientRect();
    overlayUsuarios.style.top = `${rect.bottom + 15}px`;
    overlayUsuarios.style.left = `${rect.left + -50}px`;
});

// Obtiene los elementos del overlay de cierre de sesión
const overlay = document.getElementById('overlay');
const openOverlayLink = document.getElementById('open-overlay');
const cancelButton = document.getElementById('cancel-button');
const confirmButton = document.getElementById('confirm-button');

// Función para abrir el overlay de confirmación y cerrar el overlay de usuarios
openOverlayLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    
    // Cierra el overlay de usuarios
    const overlayUsuarios = document.getElementById('opusuarios-overlay');
    overlayUsuarios.style.display = 'none';
    
    // Abre el overlay de confirmación de cierre de sesión
    overlay.classList.add('active');
});

// Función para cerrar el overlay de confirmación cuando se presiona "No"
cancelButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Función para confirmar y cerrar sesión cuando se presiona "Sí"
confirmButton.addEventListener('click', () => {
    // Aquí puedes agregar la funcionalidad para cerrar sesión
    overlay.classList.remove('active');
    alert('Has cerrado sesión.');
});
//funciones del buscador//
const boton_busqueda = document.querySelector('.buscador');
const boton_cerrar = document.querySelector('.equis');
const root = document.documentElement;
// al hacer click en la lupa se desplegara las demas opciones del buscador//
boton_busqueda.addEventListener('click', function() {
    root.style.setProperty('--buscador-ocultar', 'flex');
});
// cuando las demas opciones del buscador esten abiertas, se podra cerrar al hacer click en la X//
boton_cerrar.addEventListener('click', function() {
    root.style.setProperty('--buscador-ocultar', 'none');
});
//esto funciona gracias al root en el css que indica las cosas que se deben ocultar//

const miniaturas = document.querySelectorAll('.miniatura');
const visualizador = document.getElementById('imagen-visualizador');

miniaturas.forEach(imagen => {
    imagen.addEventListener('click', function() {
        // Cambiar la imagen en el visualizador
        visualizador.src = this.src;

        // Quitar el borde morado de la imagen previamente seleccionada
        miniaturas.forEach(img => img.classList.remove('active'));

        // Agregar el borde morado a la imagen seleccionada
        this.classList.add('active');
    });
});