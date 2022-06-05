import { obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";
import { buscarHeroe, buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

/*
promesaLenta.then( mensaje =>  console.log(mensaje));

promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log);
*/

/* Promise.race([promesaLenta,promesaMedia,promesaRapida])
.then(console.log)
.catch(console.warn);
 */

//Promise vs  ASYNC
/*
buscarHeroe('capi').then(console.log)
.catch(console.warn);

buscarHeroeAsync('irond').then(console.log)
.catch(console.warn);
*/


console.time('await');
//para el away se usa asi
//obtenerHeroesArr().then(console.table);
obtenerHeroesArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
}
   
);


//sin el away se usa asi y con el settimeout
const heroes = obtenerHeroesArr();

console.log(heroes);
console.table(heroes);

obtenerHeroeAwait('capi')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('await');
     }).catch(console.warn);

