describe("Pruebas en <<DemoComponents/>>", () => {
   test("esta prueba no debe de fallar", () => {
      //1.inicializacion
      const message1 = "hola Mundo";

      //2.Estimulo
      //trim elimina los espacios que hay a sus extremos
      const message2 = message1.trim();

      //3.Observar el comportamiento... esperado
      //estaba esperando que message1 sea igual a message2
      expect(message1).toBe(message2);

      
   });
});
