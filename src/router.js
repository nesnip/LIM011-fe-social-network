/* eslint-disable default-case */
import SignIn from './view/signin.js';
import LogIn from './view/login.js';
import Home from './view/home.js';

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'LogIn':
      root.appendChild(LogIn());
      break;
    case 'SignIn':
      root.appendChild(SignIn());
      break;
    case 'Home':
      root.appendChild(Home());
      break;
  }
};

const changeTmp = (hash) => {
  const user = firebase.auth().currentUser;
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/LogIn');
  } if (hash === '#/SignIn') {
    return viewTmp('#/SignIn');
  } if (hash === '#/Home' && user !== null) {
    return viewTmp('#/Home');
  }
  window.location.hash = '#/LogIn';
  return viewTmp('#/LogIn');
};

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
