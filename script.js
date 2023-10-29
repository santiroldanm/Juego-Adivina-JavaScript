//SELECCIONAR NUMERO RANDOM
let numeroRandom = Math.floor(Math.random()*100)+1

//EL JUGADOR INGRESA LOS NUMEROS
let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let reiniciar = document.getElementById("reiniciar")
let intento = document.getElementById("intento")
let cantidad = document.getElementById("cantidad")
let intentos = 0


//ACCION PARA BOTON CHECK
function check(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos ++
    intento.textContent = intentos
    intento.style.color= "rgb(72, 72, 219)"
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "No señor 👿 Por favor introduce un número válido entre 1 y 100"
        return
}

    if(numeroIngresado === numeroRandom){
        mensaje.textContent = "¡FELICITACIONES! 😁 Adivinaste el número";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
        cantidad.textContent = "Lo realizaste en: "

    } else if(numeroIngresado < numeroRandom){
        mensaje.textContent = "¡MÁS ALTO! ⬆️ Mi número elegido es mayor que " + (numeroEntrada.value);
        mensaje.style.color = "red";
    } else{
        mensaje.textContent = "¡MÁS BAJO! ⬇️ Mi número elegido es menor que " + (numeroEntrada.value);
        mensaje.style.color = "red";
    }
}
