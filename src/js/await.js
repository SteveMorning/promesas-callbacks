import { buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {  //se pone async y se agrega el await
    const heroesArr = [];

    for (const id of heroesIds) {
   //     buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));  //se usa con el settimeout
   //     const heroe = buscarHeroeAsync(id);   // Devuelve promesas
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

// NO utilizar el setTimeout en este caso por eso se usa el await
/* 
    setTimeout(() => {
        console.log('obtenerHeroesArr');
        console.table(heroesArr);
    }, 1000);
 */
    return heroesArr; 
    




};