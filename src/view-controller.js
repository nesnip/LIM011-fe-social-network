/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
} from './controller/controller-firebase.js';
// eslint-disable-next-line import/prefer-default-export
const changeHash = (hash) => {
  location.hash = hash;
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() => alert('Datos Guardados'), changeHash('/LogIn'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const accesoLogin = () => {
  const user = firebase.auth().currentUser;

  if (user != null) {
    console.log('logueado', user.email);
  }
};

export const loginWithGoogle = () => {
  googleLogin().then(() => changeHash('/Home'));
};
export const loginWithFacebook = () => {
  facebookLogin().then(() => changeHash('/Home'));
};
export const logInOnSubmit = () => {
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;
  logIn(email, password)
    .then(() => changeHash('/Home'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const signOutSubmit = () => {
  signOut().then(() => {
    changeHash('/LogIn');
  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};
