let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosGenerados = [];
let rangoMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*rangoMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    // si ya genero todos los numeros 
    if(listaNumerosGenerados.length == rangoMaximo){
        asignarTextoElemento('p',`Ya se han generado todos los numeros posibles`);
    }
    else{
        if (listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   

function intentarNumero() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');

    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


condicionesIniciales();

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${rangoMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
    return
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');

    
}
