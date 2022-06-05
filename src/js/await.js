import { ids } from "webpack";
import { buscarHeroe, buscarHeroeAsync  } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {  //se pone async y se agrega el await
 /*
    const heroesArr = [];

    for (const id of heroesIds) {
        //     buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));  //se usa con el settimeout
        //     const heroe = buscarHeroeAsync(id);   // Devuelve promesas
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    // esta es la version optimizada
    for (const id of heroesIds) {
        //     buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));  //se usa con el settimeout
        //     const heroe = buscarHeroeAsync(id);   // Devuelve promesas
        heroesArr.push(buscarHeroe(id));
    }

*/
    // Version aun mas optimizada
    return  await Promise.all( heroesIds.map (buscarHeroe));
// Version master of the universe
// export const obtenerHeroesArr = async () =>   await Promise.all( heroesIds.map (buscarHeroe));


    // NO utilizar el setTimeout en este caso por eso se usa el await
    /* 
        setTimeout(() => {
            console.log('obtenerHeroesArr');
            console.table(heroesArr);
        }, 1000);
     */

/*      return heroesArr;
    
      // esta es la version optimizada
      return await Promise.all(heroesArr) ;
*/
  
};

export const obtenerHeroeAwait = async (id)=> {

    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;  
    }
    catch(err){
        console.log('CATCH');
        throw err;

    }
  

    

};