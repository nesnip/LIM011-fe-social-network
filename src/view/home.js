import { signOutSubmit, addPostOnSubmit } from '../view-controller.js';

export default () => {
  const postContainer = document.getElementById('posts');
  const userId = firebase.auth().currentUser;
  firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
      postContainer.innerHTML += `
      <div class = "container-post">
      <div class = "post-avatar"
      <p> <img src=" ${userId.photoURL} " class="foto-usuario"></p>
      <p> ${userId.displayName} </p>
      </div>
      <p> ${doc.data().title} </p>
      </div>
      `;
    });
  });
  const home = document.createElement('div');
  const divContent = `
    
        <nav>
        <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Cerrar sesion</a></li>
        </ul>
      </nav>
      <section>
      <figure>
       <div class="portada"> </div>
       <div class="info-usuario"> 
       <img src="https://image.flaticon.com/icons/svg/145/145852.svg" alt="" class="foto-usuario">
       </div>
      </figure>
      <main>
       <textarea id="input-post" rows="4" cols="50" placeholder="¿Que quieres compartir?" > </textarea> 
       <button id="btn-subir-img"> imagen </button>
       <button id="btn-compartir"> Compartir </button>
       </main>
       </section>
       <section id ="mostrar"> </section>
    `;
  home.innerHTML = divContent;

  const btnSignOut = home.querySelector('#btn-cerrar');
  btnSignOut.addEventListener('click', signOutSubmit);
  const buttonAddPost = home.querySelector('#btn-compartir');
  buttonAddPost.addEventListener('click', addPostOnSubmit);

  return home;
};
