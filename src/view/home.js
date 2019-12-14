import { signOut } from '../view-controller.js';

export default () => {
  const home = document.createElement('div');
  const formContent = `
        <h2>Home</h2>
        <button id="btn-log-out">Log out</button>
    `;

  home.innerHTML = formContent;

  const btnLogOut = home.querySelector('#btn-log-out');
  btnLogOut.addEventListener('click', signOut);
  return home;
};
