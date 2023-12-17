//solo podemos hacer pruebas de funciones exportadas

export function getSaludo(nombre) {
   return "Hola " + nombre;
}
const nombre = "Esteban";

console.log(`Este es un texto: ${getSaludo(nombre)}  `);
