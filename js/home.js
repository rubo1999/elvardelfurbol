const botonesNav = document.querySelectorAll(".apertura, .cierre");
const navegacion = document.querySelector("header nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", () => {
        navegacion.classList.toggle("desplegado");
    })
})

const equipos = document.querySelectorAll("header nav ul li a");

equipos.forEach(equipo => {
    equipo.addEventListener("mouseover", () => {
        equipo.classList.add("seleccionado");
    })
    equipo.addEventListener("mouseout", () => {
        equipo.classList.remove("seleccionado");
    })
    equipo.addEventListener("click", () => {
        equipo.classList.add("seleccionado");
    })
})

const botonDcha = document.querySelector(".derecha");
const botonIzqda = document.querySelector(".izquierda");
const slider = document.querySelector(".slider");
const secciones = document.querySelectorAll(".slider section");

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
    }
    else{
        operacion = operacion - anchoImg;
        movimiento();
    }
}

function desplazarDerecha(){
    contador++;
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
}, 4000);

botonIzqda.addEventListener("click", () => desplazarIzquierda());
botonDcha.addEventListener("click", () => desplazarDerecha());

function movimiento(){
    slider.style.transform = `translate(-${operacion}%)`;
}
function transicion(){
    slider.style.transition = "ease 1s"
}