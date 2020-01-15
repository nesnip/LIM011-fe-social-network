import { initRouter } from './router.js';

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAa1kK8-5tcSq8d-ftwMRXWqrPWqdmB7so',
    authDomain: 'red-social-e6134.firebaseapp.com',
    databaseURL: 'https://red-social-e6134.firebaseio.com',
    projectId: 'red-social-e6134',
    storageBucket: 'red-social-e6134.appspot.com',
    messagingSenderId: '446106510838',
    appId: '1:446106510838:web:38d9a0f0a4f52f9359d3d7',
    measurementId: 'G-WF96L4V7ZS',
  };
  firebase.initializeApp(firebaseConfig);
  initRouter();
};
window.onload = init();
