import { sayHelloWithName } from '../src/app';

describe('Prueba de sayHelloWithName', () => {
  it(`sayHelloWithName('Mundo'): debe regresar Hola, Mundo!`, () => {
    expect(sayHelloWithName('Mundo')).toBe('Hola, Mundo!');
  });

  it(`sayHelloWithName('Juan'): debe regresar Hola, Juan!`, () => {
    expect(sayHelloWithName('Juan')).toBe('Hola, Juan!');
  });
});
