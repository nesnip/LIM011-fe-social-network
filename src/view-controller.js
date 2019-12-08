import { signUp } from './controller/controller-firebase.js';
// eslint-disable-next-line import/prefer-default-export
const changeHash = (hash) => {
  location.hash = hash;
}
export const signUpOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signUp(email, password)
  .then(() => changeHash('/home'))
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};
