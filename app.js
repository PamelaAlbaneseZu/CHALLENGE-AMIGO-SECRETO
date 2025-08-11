//crea lista
let listaAmigos = [];
//declarando funciones
function actualizarListaAmigos() {
    document.querySelector
}
function agregarAmigos() {
    nombre = document.getElementById("amigo").value
    if (nombre == false) {
        alert ('Porfavor, inserte un nombre')
    }else {
        listaAmigos.push(nombre);
        alert(`${nombre} fue registrado con exito!`);
        limpiarCaja();
    }
    console.log(listaAmigos);
    return;
}

function sortearAmigo() {
    let listaSorteo = [];
    let resultadoValido = true;
    
    while (resultadoValido == true){
        let aleatorio = Math.floor(Math.random()* listaAmigos.length);
        let amigo = Math.floor(Math.random()* listaSorteo.length);
        listaAmigos.push(aleatorio);
        listaSorteo.push(amigo);
        if (aleatorio == listaAmigos.legth) {
            resultadoValido = true
            break;
        }
        for (let i = 0; i <listaAmigos.length; i++) {
            console.log(i);
        }
    }
     


    elemento = document.querySelector('h2');
    elemento.innerHTML = `${listaAmigos[aleatorio]}`;
    

    
}

function limpiarCaja(){
    document.getElementById("amigo").value = '';
}