import { describe, test, expect } from "@jest/globals";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("prueba de promesas 09-promesas", () => {
   test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
      //todo se ejecutara en secuenciaz
      const id = 1;
      getHeroeByIdAsync(id)
         //como es una tarea asincrona  se puede poner .then
         .then((hero) => {
            expect(hero).toEqual({
               id: 1,
               name: "Batman",
               owner: "DC",
            });
            done();
         });
   });
   test("getHeroeByIdAsync debe de obtener un error si no heroe existe", () => {
      //aumentando el tiempo

      //todo se ejecutara en secuenciaz
      const id = 100;
      getHeroeByIdAsync(id)
         //como es una tarea asincrona  se puede poner .then
         .catch((error) => {

            expect(error).toBe("No se pudo encotrar el hero con id 100");
            done();
         });
   });
});
