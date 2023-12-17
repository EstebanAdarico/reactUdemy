//lo que esta dentro de la funcion describe puede estar el test

import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
   test('getSaludo debe de retornar "hola Esteban"', () => {
      const name = "Esteban";
      const message = getSaludo(name);
      //lo esperado ... y la comparacion para que funcione
      expect(message).toBe(`hola ${name}`);
   });
});
