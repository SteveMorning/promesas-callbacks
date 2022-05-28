
import { buscarheroe } from './js/callbacks';
import './styles.css';



const heroeId = 'capi';

buscarheroe(heroeId, (heroe) => {

    console.log('CallBack llamado!');
    console.log(heroeId);
    console.log(heroe);

}
);

console.log('Fin del Programa');
