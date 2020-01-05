import {
  logIn, signIn, facebookLogin, googleLogin,
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

describe('logIn', () => {
  it('debería ser una  funciòn', () => {
    expect(typeof logIn).toBe('function');
  });
});

describe('Iniciar sesiòn', () => {
  it('Debería poder iniciar sesion', () => logIn('vanesagarro97@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('vanesagarro97@gmail.com');
    }));
});
describe('SignIn', () => {
  it('debería ser una  funciòn', () => {
    expect(typeof signIn).toBe('function');
  });
});

describe('Registrar usuario', () => {
  it('Debería poder registrar un usuario y contraseña', () => logIn('user@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('user@gmail.com');
    }));
});
describe('FacebookLogin', () => {
  it('debería ser una  funciòn', () => {
    expect(typeof facebookLogin).toBe('function');
  });
});
describe('GoogleLogin', () => {
  it('debería ser una  funciòn', () => {
    expect(typeof googleLogin).toBe('function');
  });
});
