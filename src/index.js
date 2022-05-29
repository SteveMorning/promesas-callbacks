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


buscarHeroe('capi').then(console.log)
.catch(console.warn);

buscarHeroeAsync('irond').then(console.log)
.catch(console.warn);