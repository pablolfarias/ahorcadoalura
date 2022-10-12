// Variables

var pantallaUno = document.querySelector(".pantallaUno");
var botonIniciarJuego = document.querySelector("#iniciarJuego");
var botonAgregarPalabra = document.querySelector("#agregarPalabra");
var pantallaDos = document.querySelector(".pantallaDos");
var inputAgregarPalabra = document.querySelector("#inputAgregarPalabra");
var botonGuardarYEmpezar = document.querySelector("#botonGuardarYEmpezar");
var botonCancelarPantallaDos = document.querySelector("#botonCancelarPantallaDos");
var pantallaTres = document.querySelector(".pantallaTres");
var areaCanvas = document.querySelector(".areaCanvas").getContext("2d");
var botonNuevoJuego = document.getElementById("nuevoJuego");
var botonRendirse = document.getElementById("rendirse");
var advertenciaPerdiste = document.querySelector(".advertenciaPerdiste");
var advertenciaGanaste = document.querySelector(".advertenciaGanaste");
var botonJugarDeNuevoGanaste = document.querySelector(".botonJugarDeNuevoGanaste");
var botonVolverMenuGanaste = document.querySelector(".botonVolverMenuGanaste");
var botonJugarDeNuevoPerdiste = document.querySelector(".botonJugarDeNuevoPerdiste");
var botonVolverMenuPerdiste = document.querySelector(".botonVolverMenuPerdiste");
var queryBotonNuevoJuego = document.querySelector(".botonNuevoJuego");
var botonAceptarNuevoJuego = document.querySelector(".botonAceptarNuevoJuego");
var botonCancelarNuevoJuego = document.querySelector(".botonCancelarNuevoJuego");
var queryBotonRendirse = document.querySelector(".botonRendirse");
var botonAceptarRendirse = document.querySelector(".botonAceptarRendirse");
var botonCancelarRendirse = document.querySelector(".botonCancelarRendirse");
var informacion = document.querySelector(".informacion");

var palabrasSecretas = ["AUTO", "CASA", "PELOTA", "MUSICA", "VOLAR", "TECLADO", "BOTONES", "FARMACIA", "ALURA", "ONE", "ORACLE", "JAVA", "FRONTEND","PROYECTO", "MESSI", "FUTBOL", "NOTEBOOK", "CAFE", "ARTE", "PANTALLA", "RADIO"];
var palabraAgregada = inputAgregarPalabra.value;
var palabraAgregadaCorregida = correcionDePalabra(palabraAgregada);
var numeroAleatorioV = numeroAleatorio();
var numeroPickeado = numeroPalabra();
var palabraAdivinar = "";
let letras = [];
let letrasIncorrectas = [];
var intentos = 8;
var verificarPerdida = false;
var verificarGanar = false;
var verificacionBotones = false;
var juegoPausado = false
var pantallaUnoActiva = true;

// Declaraciones

pantallaDos.className = "ocultarElemento";
pantallaTres.className = "ocultarElemento";
informacion.className = "informacion"


window.onload = function () {
    perdistePalabraAdivinar();
    ganastePalabraAdivinar();
}

// Funciones

// Cambios de Pantalla

function cambioPantallaUnoPantallaDos() {

    pantallaDos.className = "pantallaDos";
    pantallaUno.className = "ocultarElemento";
}

function cambioPantallaDosPantallaUno() {
    pantallaUno.className = "pantallaUno";
    pantallaDos.className = "ocultarElemento";
}

function cambioPantallaUnoPantallaTres() {
    pantallaUno.className = "ocultarElemento";
    pantallaTres.className = "pantallaTres";
}

function cambioPantallaDosPantallaTres() {

    pantallaDos.className = "ocultarElemento";
    pantallaUno.className = "ocultarElemento";
    pantallaTres.className = "pantallaTres";
}

function cambiarPantallaTresPantallaUno() {
    pantallaDos.className = "ocultarElemento";
    pantallaTres.className = "ocultarElemento";
    pantallaUno.className = "pantallaUno";
}

// Verificar Pantalla Uno 

function verificarPantallaUno () {
    if (pantallaUno.classList.contains("pantallaUno") || pantallaUno.classList.contains("pantallaUno") ) {
        return true;
    }
    else {
        return false;
    }
}
//Funciones para Agregar Palabra

function pushPalabraLista() {

    if (palabraAgregadaCorregida !== undefined && palabraAgregadaCorregida > 0) {
        palabrasSecretas.push(palabraAgregadaCorregida);
    }
}

function correcionDePalabra() {
    const vocalesAcentuadas = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", }
    var correcion = inputAgregarPalabra.value;
    correcion = correcion.replace(/[áéíóú]/g, m => vocalesAcentuadas[m])
    correcion = correcion.replace(/[^a-zA-Z ]/g, m => "");
    correcion = correcion.toUpperCase();
    palabraAgregadaCorregida = correcion;
}

function agregarPalabra() {

    correcionDePalabra();
    pushPalabraLista();
    palabraAdivinar = palabrasSecretas[numeroPickeado];
    cambioPantallaDosPantallaTres();

}

// Funciones Selector de Palabra

function numeroAleatorio() {
    return Math.round(Math.random() * palabrasSecretas.length);
}

function numeroPalabra() {

    var numero = numeroAleatorio();

    while (numero > (palabrasSecretas.length - 1)) {
        numero = numeroAleatorio();
    }

    return numero;
}

// Adivinar

function verificarAdivinar() {

    if (letras.length == palabraAdivinar.length) {
        return verificarGanar = true;
    }

    else {
        return verificarGanar = false;
    }
}

function alertaGanaste() {
    advertenciaGanaste.className = "mostrarElemento";
}

function ganastePalabraAdivinar() {
    document.querySelector(".ganastePalabraAdivinar").innerHTML = palabraAdivinar;
}

function adivinarPalabra() {
    
    if (verificarGanar == true) {
        alertaGanaste();
        ganastePalabraAdivinar();
        verificacionBotones = true;
    }
}
// Perder


function perdistePalabraAdivinar() {
    if (intentos === 0) {
        document.querySelector(".perdistePalabraAdivinar").innerHTML = palabraAdivinar;
    }
}

function alertaPerdiste() {
    advertenciaPerdiste.className = "mostrarElemento";
}

function agregarLetraIncorrecta() {
    intentos -= 1;
}

function errores() {
    if (intentos == 7) {
        dibujarBase();
        dibujarMastil();
    }

    if (intentos == 6) {
        dibujarCabeza();
    }

    if (intentos == 5) {
        dibujarTorso();
    }

    if (intentos == 4) {
        dibujarBrazoDerecho();
    }

    if (intentos == 3) {
        dibujarBrazoIzquierdo();
    }

    if (intentos == 2) {
        dibujarPiernaDerecha();
    }

    if (intentos == 1) {
        dibujarPiernaIzquierda();
    }

    if (intentos == 0) {
        alertaPerdiste();
        perdistePalabraAdivinar();
    }
}

function verificarPerdida() {
    if (letrasIncorrectas.length === 8) {
        return verificarPerdida = true;
    }
}

// Comrpobar Letras


function verificarKeyCode(letraCode) {
    if (letraCode >= 65 && letraCode <= 90) {
        return true;
    }
    else {
        return false;
    }

}

function dibujarAhorcado(letra, letraCode) {

    let keyCodeVerificado = verificarKeyCode(letraCode);
    let letrasAceptadas = letras.indexOf(letra);
    let letrasDenegadas = letrasIncorrectas.indexOf(letra);

    if (keyCodeVerificado === true && letrasAceptadas === -1 && letrasDenegadas === -1) {
        if (palabraAdivinar.includes(letra)) {
            for (let i = 0; i < palabraAdivinar.length; i++) {
                if (palabraAdivinar[i] === letra) {
                    escribirLetraCorrecta(i);
                    letras.push(letra);
                }
            }
        }

        else {
            agregarLetraIncorrecta(letra);
            letrasIncorrectas.push(letra);
            escribirLetraIncorrecta(letra, intentos);
            errores();
        }
    }
}

// Limpiar array

function limpiarLetras() {
    for (let i = 0; i < palabraAdivinar.length; i++) {
        letras.splice(i);
    }
}

function limpiarLetrasIncorrectas() {
    for (let i = 0; i < 8; i++) {
        letrasIncorrectas.splice(i);
    }
}

// Pantalla Tres: Boton Nuevo Juego

function funcionBotonAceptarNuevoJuego () {
    juegoPausado = false;
    jugarDeNuevo();
    queryBotonNuevoJuego.className = "ocultarElemento";
    botonNuevoJuego.disabled = false;
    botonRendirse.disabled = false;
}

function funcionBotonCancelarNuevoJuego () {
    juegoPausado = false;
    queryBotonNuevoJuego.className = "ocultarElemento";
    botonNuevoJuego.disabled = false;
    botonRendirse.disabled = false;
}

function funcionBotonNuevoJuego () {
    queryBotonNuevoJuego.className = "mostrarElemento";
    botonNuevoJuego.disabled = true;
    botonRendirse.disabled = true;
    botonAceptarNuevoJuego.onclick = funcionBotonAceptarNuevoJuego;
    botonCancelarNuevoJuego.onclick = funcionBotonCancelarNuevoJuego;
    return juegoPausado = true;
}

// Pantalla Tres: Boton Rendirse

function funcionBotonAceptarRendirse () {
    juegoPausado = false;
    intentos = 8;
    limpiarLetras();
    limpiarLetrasIncorrectas();
    numeroPickeado = numeroPalabra();
    verificarPerdida = false;
    verificarGanar = false;
    queryBotonRendirse.className = "ocultarElemento";
    botonNuevoJuego.disabled = false;
    botonRendirse.disabled = false;
    cambiarPantallaTresPantallaUno();
    pantallaUnoActiva = true;
    informacion.className = "informacion";
}

function funcionBotonCancelarRendirse () {
    juegoPausado = false;
    queryBotonRendirse.className = "ocultarElemento";
    botonNuevoJuego.disabled = false;
    botonRendirse.disabled = false;
}

function funcionBotonRendirse () {
    queryBotonRendirse.className = "mostrarElemento";
    botonNuevoJuego.disabled = true;
    botonRendirse.disabled = true;
    botonAceptarRendirse.onclick = funcionBotonAceptarRendirse;
    botonCancelarRendirse.onclick = funcionBotonCancelarRendirse;
    return juegoPausado = true;
}

// Iniciar Juego

function teclaPresionada () {
    
    document.onkeydown = (e) => {
        if (verificarGanar == false && verificarPerdida == false && juegoPausado == false) {
            var letra = e.key.toUpperCase();
            var letraCode = e.keyCode;
            
            if (pantallaUnoActiva == false) {
                dibujarAhorcado(letra, letraCode);
                verificarAdivinar();
                adivinarPalabra();
            }
        }
    }
}

function iniciarJuego() {
    pantallaUnoActiva = false;
    informacion.className = "ocultarElemento";
    agregarPalabra();
    cambioPantallaUnoPantallaTres();
    dibujarCanvas();
    dibujarLineas();
    teclaPresionada();
    
}

function iniciarJuegoPantallaTres() {
    if (inputAgregarPalabra.value !== "" && inputAgregarPalabra.value.length >= 3) {
        iniciarJuego();
        inputAgregarPalabra.value = "";
    }
}

function jugarDeNuevo() {
    
    intentos = 8;
    limpiarLetras();
    limpiarLetrasIncorrectas();
    palabraAdivinar = "";
    numeroPickeado = numeroPalabra();
    verificarPerdida = false;
    verificarGanar = false;

    advertenciaGanaste.className = "ocultarElemento";
    advertenciaPerdiste.className = "ocultarElemento";
    iniciarJuego();  
}
var pantalla = cambiarPantallaTresPantallaUno()

function volverAlMenu() {
    
    intentos = 8;
    limpiarLetras();
    limpiarLetrasIncorrectas();
    informacion.className = "informacion";

    numeroPickeado = numeroPalabra();
    verificarPerdida = false;
    verificarGanar = false;

    advertenciaGanaste.className = "ocultarElemento";
    advertenciaPerdiste.className = "ocultarElemento";
    cambiarPantallaTresPantallaUno();
    pantallaUnoActiva = true;
}

botonAgregarPalabra.addEventListener("click", cambioPantallaUnoPantallaDos);
botonCancelarPantallaDos.addEventListener("click", cambioPantallaDosPantallaUno);
botonIniciarJuego.addEventListener("click", iniciarJuego);
botonGuardarYEmpezar.addEventListener("click", iniciarJuegoPantallaTres);
botonJugarDeNuevoPerdiste.addEventListener("click", jugarDeNuevo);
botonVolverMenuPerdiste.addEventListener("click", volverAlMenu);
botonJugarDeNuevoGanaste.addEventListener("click", jugarDeNuevo);
botonVolverMenuGanaste.addEventListener("click", volverAlMenu);
botonNuevoJuego.addEventListener("click", funcionBotonNuevoJuego);
botonRendirse.addEventListener("click", funcionBotonRendirse);
