const botonesNav = document.querySelectorAll(".apertura, .cierre");
const navegacion = document.querySelector("header nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", () => {
        navegacion.classList.toggle("desplegado");
    })
})


const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const carrusel = document.querySelector(".noticias");
const secciones = document.querySelectorAll(".noticias section");

let operacion = 0;
let anchoImg = 100 / secciones.length;
let contador = 0;

function desplazarIzquierda(){
    contador--;
    transicion();
    if(contador < 0){
        contador = secciones.length - 1;
        operacion = anchoImg * (secciones.length - 1);
        movimiento();
    }else{
        operacion = operacion - anchoImg;
        movimiento();
    }
}

function desplazarDerecha(){
    contador ++;
    transicion();
    if(contador >= secciones.length){
        contador = 0;
        operacion = 0;
        movimiento();
    }else{
        operacion = operacion + anchoImg;
        movimiento();
    }
}

setInterval(() => {
    desplazarDerecha();
}, 4000)

anterior.addEventListener("click", () => desplazarIzquierda());
siguiente.addEventListener("click", () => desplazarDerecha());

function movimiento(){
    carrusel.style.transform = `translate(-${operacion}%)`;
}

function transicion(){
    carrusel.style.transition = "ease 1s";
}