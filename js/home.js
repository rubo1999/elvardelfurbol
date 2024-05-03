//MENÚ DE NAVEGACION

const botonesNav = document.querySelectorAll(".apertura, .cierre");
const navegacion = document.querySelector("header nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", () => {
        //Al hacer click, alterna la clase "desplegado" del elemento "navegación", es decir, si la clase "desplegado" está activa la elimina, si no está activa, la añadirá.
        navegacion.classList.toggle("desplegado");
    })
})

//SUBRAYADO DE CADA UNO DE LOS ENLACES

const opciones = document.querySelectorAll("header nav ul li a");

//Función para aplicar el subrayado
function click(link) {
    opciones.forEach((i) => i.classList.remove("seleccionado")); //Elimina el subrayado de todos los enlaces
    link.classList.add("seleccionado");//Aplica el subrayado al enlace clicado
}

//Configuración del evento click para cada enlace
opciones.forEach((link) => {
    link.addEventListener("click", () => click(link)); //Se aplica el subrayado al hacer click
})

//Al cargar la página, aplicar el subrayado al enlace correspondiente según la página actual
const currentURL = window.location.pathname; //Obtención de la ruta de la URL actual
opciones.forEach((link) => {
    const href = link.getAttribute("href");
    if(currentURL.includes(href)){
        link.classList.add("seleccionado");//Aplica el subrayado según la URL actual
    }
})

//SLIDER

const botonDcha = document.querySelector(".derecha");
const botonIzqda = document.querySelector(".izquierda");
const slider = document.querySelector(".slider");
const secciones = document.querySelectorAll(".slider section");

let operacion = 0; //Variable para controlar el desplazamiento de la slider
let anchoImg = 100 / secciones.length; //Indica el porcentaje del desplazamiento
let contador = 0; //Indica la imagen en la que nos encontramos

function desplazarIzquierda(){
    //Funcion que determina que si contador es menor que 0, se reinicia al último elemento, sino operación decrementa para mover la slider hacia la izquierda
    contador--;
    transicion(); 
    if(contador < 0){
        contador = secciones.length - 1;//Reinicia al final
        operacion = anchoImg * (secciones.length - 1);//Desplazamiento al final
        movimiento();
    }
    else{
        operacion = operacion - anchoImg; //Desplazamiento a la izquierda
        movimiento();
    }
}

function desplazarDerecha(){
    //Función que determina que si contador es mayor que el índice de la última sección, se reinicia al principio, sino aumenta operación para mover el slider hacia la derecha. 
    contador++;
    transicion();
    if(contador > secciones.length - 1){
        contador = 0; //Se reinicia al principio
        operacion = 0; //Desplazamiento al principio
        movimiento();
    }else{
        operacion = operacion + anchoImg; //Desplazamiento hacia la derecha
        movimiento();
    }
}

function movimiento(){
    //Función para desplazar la slider según el valor de operación
    slider.style.transform = `translate(-${operacion}%)`;
}

function transicion(){
    //Función que determina el suave desplazamiento de la slider
    slider.style.transition = "ease 1s";
}

botonIzqda.addEventListener("click", () => desplazarIzquierda());//Evento para mover a la izquierda
botonDcha.addEventListener("click", () => desplazarDerecha());//Evento para mover a la derecha

setInterval(() => {
    //Implementar el desplazamiento automáticamente hacia la derecha cada cuatro segundos
    desplazarDerecha();
}, 4000);