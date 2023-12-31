// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from "../data/heroes";

// console.log( owners );

// export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
//desestructurando la funcion flecha de arriba (para que encuentre el numero )
export function getHeroeById(id) {
   return heroes.find((heroe) => heroe.id === id);
}

// console.log( getHeroeById(2) );

//  para que filtre ciertas cantidades
export const getHeroesByOwner = (owner) =>
   heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );
