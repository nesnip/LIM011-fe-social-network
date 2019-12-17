/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { example } from '../src/example.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
});
