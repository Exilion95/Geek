const listaConsolas = () => {
    return fetch("http://localhost:3000/consolas").then(respuesta => respuesta.json());
}

const listaJuegos = () => {
    return fetch("http://localhost:3000/juegos").then(respuesta => respuesta.json());
}

export const Services = {
    listaConsolas,
    listaJuegos
};