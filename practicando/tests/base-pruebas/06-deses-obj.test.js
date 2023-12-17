//para probrar la desestructuracion de objetos
import { describe, test, expect } from "@jest/globals";
import { useContext } from "../../src/base-pruebas/06-deses-obj";

describe("probando la desestructuracion de objetos", () => {
   test("probando el useContext", () => {
      const clave = "123Esteban";
      const edad = 29;

      const desesObj = useContext(clave, edad);

      //comprobando la estructura del objeto devuelto por usecontext
      expect(desesObj).toEqual({
         nombreClave: clave,
         anios: edad,
         latlng: {
            lat: 14.1232,
            lng: -12.3232,
         },
      });
   });
});
