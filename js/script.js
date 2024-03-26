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


// Boton

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block"; // Mostrar la ventana emergente
}

function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none"; // Ocultar la ventana emergente
}