
console.log("¡Bienvenido a la página de la Torre Eterna!");
console.log("El juego está actualmente en desarrollo (Versión 0.1).");


const botonDescargar = document.querySelector('.download-container button');

if (botonDescargar) {
    botonDescargar.addEventListener('click', function(e) {

        const confirmar = confirm("Estás a punto de descargar 'Torre Eterna.zip'. ¿Estás seguro de que quieres continuar?");

        if (confirmar) {
            console.log("Descarga iniciada. ¡Que disfrutes la escalada!");

        } else {
            console.log("Descarga cancelada por el usuario.");
            e.preventDefault(); 
        }
    });
}

const titulo = document.getElementById('d1');
if (titulo) {
    titulo.classList.add('titulo-cargado');
}

