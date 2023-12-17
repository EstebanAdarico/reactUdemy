import{describe,test,expect}from '@jest/globals'
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'
describe('Prueba de 07-desestructuracion de arreglos', () => { 
   test('el test debe de retornar un string y un numero ', () => { 
      const [letter , numero] = retornaArreglo()
      expect( letter ).toBe('ABC');
      expect( numero ).toBe(123);
      //porbando los tipos
      expect( typeof letter ).toBe('string');
      expect( typeof numero ).toBe('number')
      //utilizando las palabras claves de jest
      expect( letter ).toEqual(expect.any('string'))
      
   })
})