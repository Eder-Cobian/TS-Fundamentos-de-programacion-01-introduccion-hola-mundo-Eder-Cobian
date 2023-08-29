import { add } from '../src/app';

describe('Prueba de add', () => {
  it('add(1, 2): debe regresar 3 ', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('add(2, 3): debe regresar 5', () => {
    expect(add(2, 3)).toBe(5);
  });
});