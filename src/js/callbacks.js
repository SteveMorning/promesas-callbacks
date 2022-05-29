
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

// se documenta los argumentos que retorna el callback
export const buscarheroe = (id, callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback(null,heroe);
    }
    else {
        callback(`No existe en el heroe con el id ${id}`);
    };


    //callback(heroe);

}

