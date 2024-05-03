//MENÚ DE NAVEGACIÓN

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

//Configuración del evento de click para cada enlace
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

//COMPRA DE PERIÓDICOS

const botonesComprar = document.querySelectorAll(".periodicos section button");
const carrito = document.querySelector(".numero p");

let numeroCompras = 0; //Creación de variable para indicar el número de compras del usuarios
carrito.innerText = numeroCompras;//Quiero que el texto del elemento carrito corresponda con la variable "numeroCompras"

const maxCompras = 9;//9 compras es el máximo permitido

botonesComprar.forEach((boton) =>{
    boton.addEventListener("click", () => {
        carrito.classList.add("activo");//se añade la clase "activo" al carrito
        if(numeroCompras < maxCompras){
            //Si el número de compras es menor a 9 se puede añadir uno más
            numeroCompras++;
            carrito.innerText = numeroCompras;//Actualiza el texto del carrito con respecto al número de compras
        }
    })
})