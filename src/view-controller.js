import { signUp } from './controller/controller-firebase.js/';
// eslint-disable-next-line import/prefer-default-export
export const signUpOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signUp(email, password).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};
