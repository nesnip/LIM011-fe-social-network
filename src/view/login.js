import { logInOnSubmit, loginWithGoogle, loginWithFacebook } from '../view-controller.js';

export default () => {
  const formLogin = document.createElement('form');
  const formContent = `
    <div class = "container-form">
      <form class="formulario">
        <h2>My FitnesSpace</h2>
          <input type="email" class="txt-form" id="email-login" placeholder="Ingrese E-mail">
          <input type="password" class="txt-form" id="password-login" placeholder = "Ingrese Contraseña">
        <button class="btn-form" id="btn-login" type="button"> Log in </button>
        <p>O bien ingresa con:</p>
        <div class="container-btn">
          <button type="button" class="btn-form-icon" id="btn-login-google"><img src="imagenes/busqueda.svg" /></button>
          <button type="button" class="btn-form-icon" id="btn-login-facebook"><img src="imagenes/facebook.svg" /></button>
        </div>
        <p>¿No tienes cuenta?</p>
        <a href="#/SignIn"> Register here </a>
      </form>
    </div>
  `;

  formLogin.innerHTML = formContent;

  // selecccionando elementos del DOM
  const btnLogIn = formLogin.querySelector('#btn-login');
  btnLogIn.addEventListener('click', logInOnSubmit);
  const btnLogInGoogle = formLogin.querySelector('#btn-login-google');
  btnLogInGoogle.addEventListener('click', loginWithGoogle);
  const btnLogInFacebook = formLogin.querySelector('#btn-login-facebook');
  btnLogInFacebook.addEventListener('click', loginWithFacebook);
  return formLogin;
};
