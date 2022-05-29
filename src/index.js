
import { buscarheroe } from './js/callbacks';
import './styles.css';



const heroeId = 'capis';

buscarheroe(heroeId, (err, heroe) => {

    console.table({ err, heroe });

    if (err) {
        console.error(err);

    } else {
        console.info(heroeId);
        console.info(heroe);
        console.info(heroe.nombre, heroe.poder);
    }
});

console.log('Fin del Programa');
