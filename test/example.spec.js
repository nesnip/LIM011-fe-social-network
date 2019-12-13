import { signIn } from '../controller/controller-firebase.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});