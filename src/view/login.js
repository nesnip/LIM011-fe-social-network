import { signUpOnSubmit } from "../view-controller.js";

export default () => {
  const form = document.createElement('form');
  const formContent = `
   <div class = "container-form">
    <form class="formulario">
      <h2>Sign up</h2>
        <input type="email" id="email" placeholder = "Ingrese E-mail">
        <input type="password" id="password" placeholder = "Ingrese Contraseña">
      <button id="btn-signUp" type="button"> Sign In </button>
    </form>
    </div>
  `;
  
  form.innerHTML = formContent;

  // selecccionando elementos del DOM
  const btnSignUp = form.querySelector('#btn-signUp');
  btnSignUp.addEventListener('click', signUpOnSubmit);
  return form;
}
