/* eslint-disable import/extensions */
import { signOutSubmit, addNoteOnSubmit, deleteNoteOnClick } from '../view-controller.js';

const itemNote = (objNote) => {
  const divElement = document.createElement('div');
  const user = firebase.auth().currentUser;
  divElement.innerHTML = `
    <div class="container-post">
      <div class="post-avatar">
        <p>Publicado por: ${objNote.usuario}</p>
      </div>
        <p>${objNote.title}</p>
        <button id="btn-deleted-${objNote.id}">
          <i>delete</i>
        </button>
    </div>
  `;
  // agregando evento de click al btn eliminar una nota
  divElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return divElement;
};

export default (notes) => {
  const home = document.createElement('div');
  const user = firebase.auth().currentUser;

  const formContent = `
    <nav>
      <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Sign out</a></li>
      </ul>
    </nav>
    <!-- form add note -->
    <section>
      <figure>
        <div class="portada"> </div>
        <div class="info-usuario"> 
        <img src="${user.photoURL}" alt="" class="foto-usuario"> <p id="user-name">${user.displayName}</p>
        </div>
      </figure>
      <main>
        <textarea name="" id="input-new-note" rows="4" cols="50" placeholder="¿Que quieres compartir?"></textarea>
        <button id="btn-subir-img"> imagen </button>
        <button type="button" id="btn-add-note">Publicar</button>
      </main>
    </section>
    <!-- notes -->
    <section>
      <div id="notes-list">
      </div>
    </section>
  `;

  home.innerHTML = formContent;

  const btnLogOut = home.querySelector('#btn-cerrar');
  btnLogOut.addEventListener('click', signOutSubmit);
  const buttonAddNote = home.querySelector('#btn-add-note');
  const div = home.querySelector('#notes-list');
  notes.forEach((note) => {
    div.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return home;
};
