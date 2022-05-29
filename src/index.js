
import { buscarheroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';



const heroeId1 = 'capi';
const heroeId2 = 'iron';

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



//Las promesas se manejan con THEN - CATCH - FINALLY
/*
buscarHeroe(heroeId1).then(heroe1 => {
    buscarHeroe(heroeId2).then(heroe2 => {
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
    });
    //console.log(`Enviando a ${heroe.nombre} a la mision`);
});
*/


// Para manejar todas la promesas se utiliza Promise.all
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)]).then(heroes => {
    console.log('promise.all', heroes);
    console.log(`Enviando a ${heroes[0].nombre} y a ${heroes[1].nombre} a la mision`);
})

// Para desesctructurar un arreglo   then(heroes =>       then(([heroe1,heroe2]) => 
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)]).
then(([heroe1,heroe2]) => {
    //console.log('promise.all', heroes);
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
})





console.log('Fin del Programa');
