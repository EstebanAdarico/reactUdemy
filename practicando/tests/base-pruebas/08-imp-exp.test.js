import { describe, test, expect } from "@jest/globals";
import {
   getHeroeById,
   getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
//importanro el listado de heroes
import heroes from "../../src/data/heroes";
describe("pruebas en 08-imp-exp", () => {
   test("getHeroeById debe retornar un hereo por ID", () => {
      //aqui va la estimulacion
      const id = 1;
      const hero = getHeroeById(id);
      console.log(hero);
      expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
   });
   test("getHeroeById debe retornar undefined si no existe", () => {
      //aqui va la estimulacion
      const id = 100;
      const hero = getHeroeById(id);
      console.log(hero);
      //tener en cuenta que si ponemos false tambie pasaria
      // toBeFalsy es para evaluar si es undifined
      expect(hero).toBeFalsy();
   });
   //debe de retornar un arreglo con los heroes de DC
   //length === 3
   //toEqual al arreglo filtrado
   //"Batman", "Superman", "Flash"
   test("retornando heroes con el parametro dc", () => {
      //aqui el paramtro es DC
      const cantidadMaxima = "DC";
      const byOwner = getHeroesByOwner(cantidadMaxima);
      console.log("retornando los heroes de DC");
      console.log(byOwner);
      //la forma correcta para darle la propiedad length a byOwner

      expect(byOwner.length).toEqual(3);
      //segunda forma de comparar el array que tenemos
      expect(byOwner).toEqual([
         {
            id: 1,
            name: "Batman",
            owner: "DC",
         },
         {
            id: 3,
            name: "Superman",
            owner: "DC",
         },
         {
            id: 4,
            name: "Flash",
            owner: "DC",
         },
      ]);
      //tercera forma es con una funcion
      expect(byOwner).toEqual(
         heroes.filter((heroe) => heroe.owner === cantidadMaxima)
      );
   });
});
