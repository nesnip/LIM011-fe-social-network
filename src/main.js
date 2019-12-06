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
  // Initialize Firebase
// eslint-disable-next-line no-undef
const proy = firebase.initializeApp(firebaseConfig);
console.log(proy.name);

const enviar = document.querySelector('#enviar');
enviar.addEventListener('click', () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // alert('Holi!!');
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorCode);
  });
});
// firebase.analytics();
