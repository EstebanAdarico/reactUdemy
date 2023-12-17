import { describe, test, expect } from "@jest/globals";
import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

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
      expect(hero).toBeFalsy();
   });
});
