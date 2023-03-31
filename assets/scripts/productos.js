import {Services} from "../scripts/crud.js"

//Se crea la funcion para poder mostrar los registros del JSON

const crearNuevaLinea = (url, nombre, precio) => {
    const linea = document.createElement("ul");
    linea.classList.add("producto__lista");
    const contenido = `<li><img src="${url}" alt="imagen producto" class="producto__img"></li>
    <li><p class="producto__nombre">${nombre}</p></li>
    <li><p class="producto__precio">${precio}</p></li>
    <li><a href="#" class="producto__link">Ver producto</a></li>`;
    linea.innerHTML = contenido;
    return linea;
}

//Variables que nos indican donde se van a crear los registros del JSON

const consola = document.querySelector("[data-consolas]");
const juegos = document.querySelector("[data-juegos]");

//Visualizamos las diferentes categorias guardadas en el JSON

Services.listaConsolas().then((data) =>{
    data.forEach( ({url, nombre, precio}) => {
        const nuevaLinea = crearNuevaLinea(url, nombre, precio);
        consola.appendChild(nuevaLinea);
    })
}).catch((error) => alert("Ocurrio un error"));

Services.listaJuegos().then((data) =>{
    data.forEach( ({url, nombre, precio}) => {
        const nuevaLinea = crearNuevaLinea(url, nombre, precio);
        juegos.appendChild(nuevaLinea);
    })
}).catch((error) => alert("Ocurrio un error"));
