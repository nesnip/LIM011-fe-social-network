import Login from './view/login.js';

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/signUp');
    } else if (hash === '#/signUp' || hash === '#/home') {
      return viewTmp(hash);
    } else {
      return viewTmp('#/signUp');
    }
  }
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
      case 'signUp':
        root.appendChild(Login());
        break;
      default:
        root.appendChild(Login());
        break;
    }
  }
  
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }