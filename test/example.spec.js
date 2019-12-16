import {
  signIn, logIn, googleLogin, facebookLogin,
} from '../src/controller/controller-firebase.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('signIn', () => {
  it('debería registrar un usuario', () => signIn('abc@gmail.com', '123456789').then((user) => {
    expect(user).toBe('Usuario registrado');
  }));
});

describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
});

describe('googleLogin', () => {
  it('debería ser una función', () => {
    expect(typeof googleLogin).toBe('function');
  });
});

describe('facebookLogin', () => {
  it('debería ser una función', () => {
    expect(typeof facebookLogin).toBe('function');
  });
});
