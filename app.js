// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//Función lista de amigos en HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;
    elementoHTML.appendChild(nuevoElemento);
}

//Función para agregar amigos al console
function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado) {
        nombres.push(amigoAgregado); // Corrección aquí
        console.log(amigoAgregado);
        asignarTextoElemento('#listaAmigos', amigoAgregado);
        limpiarCaja();
        return amigoAgregado;  // Devuelve el amigo agregado
    } else {
        alert("Debes colocar un nombre válido");
    }
}

//Función para limpiar
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Función para realizar el sorteo
function sortearAmigo() {
    if (nombres.length > 0) {
        let nombreAleatorio = Math.floor(Math.random() * nombres.length);
        let sorteo = nombres[nombreAleatorio];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = sorteo;
    } else {
        alert("No hubo ganador");
    }
}
















