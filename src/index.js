
import { buscarheroe } from './js/callbacks';
import './styles.css';



const heroeId1 = 'capi';
const heroeId2 = 'iron';

// Al tener varias variables se vuelve un problema con manejar los CALLBACK  
// por que se llama una funcion dentro otra

buscarheroe(heroeId1, (err, heroe1) => {
    console.table({ err, heroe1 });
    if (err) { return console.error(err); }

    buscarheroe(heroeId2, (err, heroe2) => {
        console.table({ err, heroe2 });
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
    })


});

console.log('Fin del Programa');
