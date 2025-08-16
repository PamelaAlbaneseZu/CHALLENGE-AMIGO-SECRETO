//crea lista y declara variable amigo
let listaAmigos = [];
let amigo = '';

//declarando funciones
function actualizarListaAmigos() {

    listaAmigos.length = 0;
    console.log(listaAmigos);
   
}

function agregarAmigos() {

    textoElemento('h2','Digite el nombre de sus amigos');
    let nombre = document.getElementById("amigo").value
    if (nombre == false) {
        alert ('Porfavor, inserte el nombre de su amigo')
    }else {
        listaAmigos.push(nombre);
    }
    console.log(listaAmigos);
    limpiarCaja();
    return;
}

function sortearAmigo() {
    
    aleatorio = Math.floor(Math.random()* listaAmigos.length); 
    console.log(listaAmigos[aleatorio]); 
    amigo = listaAmigos[aleatorio];
    textoElemento('h2',`Tu amigo secreto es ${amigo}`); 
    actualizarListaAmigos();
    return;
}

function limpiarCaja(){

    document.getElementById("amigo").value = '';
}

function textoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
