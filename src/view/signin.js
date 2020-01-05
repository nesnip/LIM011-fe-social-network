
import { signInOnSubmit } from '../view-controller.js';

export default () => {
  const form = document.createElement('form');
  const formContent = `
   <div class = "container-form">
    <form class="formulario">
      <h2>Regístrate</h2>
        <input type="email" class="txt-form" id="email" placeholder = "Ingrese E-mail">
        <input type="password" class="txt-form" id="password" placeholder = "Ingrese Contraseña">
      <button class="btn-form" id="btn-signIn" type="button"> Enviar </button>
      <p>¿Ya tienes cuenta?</p>
      <a href="#/LogIn"> Inicia sesión aquí </a>
    </form>
    </div>
  `;
  form.innerHTML = formContent;

  // selecccionando elementos del DOM
  const btnSignIn = form.querySelector('#btn-signIn');
  btnSignIn.addEventListener('click', signInOnSubmit);
  return form;
};
