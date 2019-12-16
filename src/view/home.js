import { signOutSubmit } from '../view-controller.js';

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
    `;
  home.innerHTML = divContent;

  const btnSignOut = home.querySelector('#btn-cerrar');
  btnSignOut.addEventListener('click', signOutSubmit);
  return home;
};
