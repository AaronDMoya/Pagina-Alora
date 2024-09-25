document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario

    // Muestra el overlay
    document.getElementById('publishing-overlay').style.display = 'flex';

    // Aquí puedes simular un tiempo de espera o realizar una acción
    setTimeout(function() {
        // Simulación de envío del formulario
        event.target.submit(); // Envía el formulario después de mostrar el overlay
    }, 2000); // Ajusta el tiempo según sea necesario
});