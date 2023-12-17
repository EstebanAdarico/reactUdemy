
import {describe, test,expect} from '@jest/globals'
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';
describe('Pruebas en 05-funciones', () => {
   test('getUser debe retornar un objeto ', () => {
      const testUser = {
         uid:'abc1234',
         username:'esteban41@'
      };

      const user = getUser();
      //para demostrar que el user si esta mandando el mensaje 
      expect(testUser).toEqual(user);
   }) 
   test('getUsuarioActivo deberia retornar el nombre del objeto', () => { 
      const name = 'esteban41@'
      const userActivo = getUsuarioActivo(name)
      expect(userActivo).toStrictEqual({
         uid: "ABC567",
         username: name
      })
   })
});