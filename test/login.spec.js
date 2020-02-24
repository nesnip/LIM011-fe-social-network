// configurando firebase mock
// iniciando tests

import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
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

describe('login', () => {
  afterEach(() => {
    signOut();
  });
  describe('Registro', () => {
    it('debería ser una función', () => {
      expect(typeof signIn).toBe('function');
    });

    it('Debería poder registrar un usuario nuevo con email y password', () => signIn('front@end.la', '123456')
      .then((user) => {
        expect(user.email).toBe('front@end.la');
      }));
  });

  describe('Inicio de sesión', () => {
    it('debería ser una función', () => {
      expect(typeof logIn).toBe('function');
    });

    it('Debería poder iniciar sesion', () => logIn('front@end.la', '123456')
      .then((user) => {
        console.log(user);
        expect(user.email).toBe('front@end.la');
      }));
  });

  describe('Inicio de sesión con cuenta de Google', () => {
    it('debería ser una función', () => {
      expect(typeof googleLogin).toBe('function');
    });

    it('Debería poder registrarse e iniciar sesión con cuenta Google', (done) => {
      let user = firebase.auth().currentUser;
      console.log(user);
      expect(user).toBe(null);
      googleLogin().then(() => {
        user = firebase.auth().currentUser;
        console.log(firebase.auth().currentUser);
        expect(user.isAnonymous).toBe(false);
        done();
      });
    });
  });

  describe('Inicio de sesión con cuenta de Facebook', () => {
    it('debería ser una función', () => {
      expect(typeof facebookLogin).toBe('function');
    });

    it('Debería poder registrarse e iniciar sesión con cuenta Google', (done) => {
      let user = firebase.auth().currentUser;
      console.log(user);
      expect(user).toBe(null);
      facebookLogin().then(() => {
        user = firebase.auth().currentUser;
        console.log(firebase.auth().currentUser);
        expect(user.isAnonymous).toBe(false);
        done();
      });
    });
  });
});
