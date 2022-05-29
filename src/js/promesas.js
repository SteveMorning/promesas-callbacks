
// Simula una base de datos NO relacional
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Honesto'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Fuerte'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Araña'
    },

}

//############### Forma SIN ASYNC ###################
export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe en el heroe con el id ${id}`);
        }
    });
}


//############### Forma CON ASYNC ###################
// No utiliza Promise ni el resolve ni el reject
// Reemplaza el resolve por return 
// Reemplaza el reject por throw 


export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];

    //   return new Promise((resolve, reject) => {

    if (heroe) {
        return heroe;
    } else {
        throw (`No existe en el heroe con el id ${id}`);
      //  throw Error (`No existe en el heroe con el id ${id}`);   // Devuelve detalle del error
    }

//    });

}






//###############   PROMESAS . RACE
const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promsesa Lenta'), 3000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promsesa Media'), 2000);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promsesa Rapida'), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };