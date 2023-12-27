import { describe, test, expect } from "@jest/globals";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("prueba de promesas 09-promesas", () => {
   test("getHeroeByIdAsync debe de retornar un heroe", () => {
      //todo se ejecutara en secuenciaz
      const id = 1;
      getHeroeByIdAsync(id)
      .then((hero) => {
         expect(hero).toBeFalsy();
         done();
      })
      .catch(error => {
         expect(error).toBe()
      })
   });
});
