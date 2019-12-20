/* eslint-disable import/extensions */
import { signOutSubmit } from '../view-controller.js';

export default () => {
  const home = document.createElement('div');
  const formContent = `
    <nav>
      <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Sign out</a></li>
      </ul>
    </nav>
    <p id="email-user"></p>
  `;

  home.innerHTML = formContent;

  const btnLogOut = home.querySelector('#btn-cerrar');
  btnLogOut.addEventListener('click', signOutSubmit);
  return home;
};
