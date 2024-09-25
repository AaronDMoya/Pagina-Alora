//esto hace que al oprimir el boton categorias aparezca el overlay con las demas categorias//
document.querySelector('.botonestilo1').addEventListener('click', function() {
    this.classList.toggle('activo'); // Alterna la clase 'activo' en el botón
    
    const overlay = document.getElementById('overlay-categorias'); // Obtiene el elemento del overlay
    if (this.classList.contains('activo')) { // Verifica si el botón tiene la clase 'activo'
        overlay.style.display = 'block'; // Muestra el overlay

        // Obtiene la posición del botón
        const rect = this.getBoundingClientRect();
        // Ajusta la posición del overlay
        overlay.style.top = `${rect.bottom + 15}px`; // Coloca el overlay 10px debajo del botón
        overlay.style.left = `${rect.left + -3}px`; // Alinea el overlay con el borde izquierdo del botón
    } else {
        overlay.style.display = 'none'; // Oculta el overlay si el botón no tiene la clase 'activo'
    }
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