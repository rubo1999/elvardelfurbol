const botonesNav = document.querySelectorAll(".apertura, .cierre");
const navegacion = document.querySelector("header nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", () => {
        navegacion.classList.toggle("desplegado");
    })
})


const opciones = document.querySelectorAll("header nav ul li a");

function click(link) {
    opciones.forEach((i) => i.classList.remove("seleccionado"));
    link.classList.add("seleccionado");
}

opciones.forEach((link) => {
    link.addEventListener("click", () => click(link));
})

const currentURL = window.location.pathname;
opciones.forEach((link) => {
    const href = link.getAttribute("href");
    if(currentURL.includes(href)){
        link.classList.add("seleccionado");
    }
})

const botonesComprar = document.querySelectorAll(".periodicos section button");
const carrito = document.querySelector(".numero p");

let numeroCompras = 0;
carrito.innerText = numeroCompras;

const maxCompras = 9;

botonesComprar.forEach((boton) =>{
    boton.addEventListener("click", () => {
        carrito.classList.add("activo");
        if(numeroCompras < maxCompras){
            numeroCompras++;
            carrito.innerText = numeroCompras;
        }
    })
})
