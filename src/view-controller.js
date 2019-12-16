import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
} from './controller/controller-firebase.js';
// eslint-disable-next-line import/prefer-default-export
const changeHash = (hash) => {
  // eslint-disable-next-line no-restricted-globals
  location.hash = hash;
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    // eslint-disable-next-line no-alert
    .then(() => alert('Datos Guardados'), changeHash('/logIn'))
    .catch((error) => {
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(errorMessage);
    });
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
      // eslint-disable-next-line no-alert
      alert(errorMessage);
    });
};
export const signOutSubmit = () => {
  signOut().then(() => changeHash('/logIn'))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
