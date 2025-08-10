//crea lista
let listaAmigos = [];

//declarando funciones
function actualizarListaAmigos() {
    
}

function agregarAmigos() {
    listaAmigos.push(document.getElementById("amigo").value);
    alert("Tu amigo fue ingresado con exito");
    limpiarCaja();
    console.log(listaAmigos);
}

function sortearAmigos() {
    
}

function limpiarCaja(){
    document.getElementById("amigo").value = '';
}