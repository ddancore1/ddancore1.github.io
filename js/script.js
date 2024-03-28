'use strict'

const fotos    = document.querySelector('.fotos')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
   
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -50

        fotos.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})

// Registro ventana

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

function registroExitoso() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
  
    if (nombre !== '' && email !== '' && contrasena !== '') {
      alert("¡Registrado con éxito!");
      cerrarPopup();
      return false;
    } 
}
// Boton

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block"; // Mostrar la ventana 
}

function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none"; // Ocultar la ventana 
}

// Mensaje enviado

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
        // Mostrar la ventana 
        alert("¡Mensaje enviado con éxito!")
        // Evitar que el formulario se envíe
        event.preventDefault();
    }
});