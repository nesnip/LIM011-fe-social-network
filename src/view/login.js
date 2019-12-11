import { logInOnSubmit } from "../view-controller.js";
export default () => {
    const formLogin = document.createElement('form');
    const formContent = `
     <div class = "container-form">
      <form class="formulario">
        <h2>Log in</h2>
          <input type="email" class="txt-form" id="email-login" placeholder = "Ingrese E-mail">
          <input type="password" class="txt-form" id="password-login" placeholder = "Ingrese Contraseña">
        <button class="btn-form" id="btn-login" type="button"> Log in </button>
        <a href="#SignIn"> Register here </a>
      </form>
      </div>
    `;
    
    formLogin.innerHTML = formContent;
  
    // selecccionando elementos del DOM
    const btnLogIn = formLogin.querySelector('#btn-login');
    btnLogIn.addEventListener('click', logInOnSubmit);
    return formLogin;
  }
  