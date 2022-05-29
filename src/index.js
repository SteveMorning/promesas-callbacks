
 import { buscarheroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';



const heroeId1 = 'capi';
const heroeId2 = 'iron';

//Las promesas se manejan con THEN - CATCH - FINALLY
buscarHeroe(heroeId1).then(heroe => {

    console.log(`Enviando a ${heroe.nombre} a la mision`);

});

// Codigo en base a Callbacks
// Al tener varias variables se vuelve un problema con manejar los CALLBACK  
// por que se llama una funcion dentro otra
//buscarHeroeCallback();

/*
buscarheroe(heroeId1, (err, heroe1) => {
    console.table({ err, heroe1 });
    if (err) { return console.error(err); }
    buscarheroe(heroeId2, (err, heroe2) => {
        console.table({ err, heroe2 });
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
    })
});
*/





console.log('Fin del Programa');
