import { signOutSubmit, acceso } from '../view-controller.js';

export default () => {
  const home = document.createElement('div');
  const divContent = `
    
        <nav>
        <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Sign out</a></li>
        </ul>
      </nav>
      <a id="btn-user">usuario</a>
      <a id="usuario">mostrar usuario aqui</a>
    `;
  home.innerHTML = divContent;

  const btnSignOut = home.querySelector('#btn-cerrar');
  btnSignOut.addEventListener('click', signOutSubmit);
  const btnuser = home.querySelector('#btn-user');
  btnuser.addEventListener('click', acceso);
  return home;
};
