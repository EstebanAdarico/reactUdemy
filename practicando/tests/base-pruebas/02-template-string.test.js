//TENER EN CUENTA QUE LOS IS NOT DEFINET ES POR LAS FUNCIONES
//lo que esta dentro de la funcion describe puede estar el test 
import {describe, test,expect} from '@jest/globals'
import { getSaludo } from "../../src/base-pruebas/02-template-string";
describe('Pruebas en 02-template-string',()=>{
   test('getSaludo debe de retornar "Hola esteban"',()=>{
      const name = 'esteban';
      //asignando una variable a la funcion importada getSaludo
      const message = getSaludo(name)
      expect( message ).toBe(`Hola ${name}!!!`)
   })
})