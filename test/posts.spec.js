/* eslint-disable max-len */
import {
  googleLogin, addNote, getNotes,
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

describe('addNote', () => {
  it('Debería porder agregar una nota', (done) => {
    googleLogin().then(() => {
      const user = firebase.auth().currentUser;
      console.log(firebase.auth().currentUser);
      expect(user.isAnonymous).toBe(false);
    });
    addNote('agregar un post', 'public')
      .then(() => getNotes(
        (data) => {
          const result = data.find((note) => note.title === 'agregar un post');
          expect(result.title).toBe('agregar un post');
          done();
        },
      ));
  });
});
