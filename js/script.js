'use strict';

const fotos = document.querySelector('.fotos');
const puntos = document.querySelectorAll('.punto');

puntos.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -50;
        fotos.style.transform = `translateX(${operacion}%)`;

        puntos.forEach((punto) => {
            punto.classList.remove('activo');
        });
        cadaPunto.classList.add('activo');
    });
});

// Ventana 

document.getElementById('openPopup').addEventListener('click', function () {
    openPopup();
});

function cerrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function registroExitoso() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    if (nombre.trim() !== '' && email.trim() !== '' && contrasena.trim() !== '') {
        alert('¡Registrado con éxito!');
        cerrarPopup();
        return false;
    }
}

// Contacto

document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        event.preventDefault();
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        alert('¡Mensaje enviado con éxito!');
    }
});


