import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp'
describe("Pruebas en <FirstApp/>", () => {
   test("debes hacer match con el snapshot", () => {
      //podemos importarlo por que hemos isntalado la libreria
      render(<FirstApp/>)
   });
});
   