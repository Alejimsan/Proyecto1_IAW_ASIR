// script.js

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var divError = document.getElementById('mensaje-error');
    var divExito = document.getElementById('mensaje-exito');

    divError.innerHTML = "";
    divExito.innerHTML = "";

    if (nombre === "" || email === "" || mensaje === "") {
        divError.innerHTML = "Por favor, rellena todos los campos del formulario.";
    } else {
        divExito.innerHTML = "¡Formulario enviado correctamente!";
        document.getElementById('formContacto').reset();
    }
}

function agregarCarrito() {
    var mensajeCarrito = document.getElementById('mensaje-carrito');
    var tallaSelect = document.getElementById('talla');
    if (tallaSelect) {
        var tallaSeleccionada = tallaSelect.options[tallaSelect.selectedIndex].text;
        mensajeCarrito.innerHTML = "¡Producto agregado al carrito en " + tallaSeleccionada + "!";
    } else {
        mensajeCarrito.innerHTML = "¡Producto agregado al carrito!";
    }
}

function cambiarImagen(ruta) {
    document.getElementById('imagen-principal').src = ruta;
}