/* eslint-disable import/named */
/* eslint-disable import/extensions */
import {
  signOutSubmit, addNoteOnSubmit, deleteNoteOnClick, editNoteOnSubmit,
} from '../view-controller.js';

const itemNote = (objNote) => {
  const user = firebase.auth().currentUser;
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div class="container-post">
    <div class="btn-post">
    <span id="btn-deleted-${objNote.id}">${user.uid === objNote.uid ? '<img id="trash" src="imagenes/delete.png" />' : ''}</span>
    <button id="btn-edit-${objNote.id}">Editar</button>
    <button id="btn-pen">Lapicero</button>
    </div>
      <div class="photo-avatar">
      
        <p>${objNote.avatar === null ? '<img src="../imagenes/user.svg" class="avatar-usuario">' : `<img src="${objNote.avatar}" class="avatar-usuario">`}</p>
        <p id ="nombre-usuario">Publicado por ${objNote.usuario}</p>
        <p id ="nombre-usuario">Publicado el día ${objNote.date}</p>
      </div>
      <section class="texto-post">
        <p>${objNote.title}</p>
      </section>
    </div>
  `;

  divElement.querySelector(`#btn-edit-${objNote.id}`).style.display = 'none';

  divElement.querySelector('#btn-pen')
    .addEventListener('click', () => {
      const post = document.querySelector('.texto-post');
      post.innerHTML = `
      <div class="">
        <textarea id="input-edit-note" rows="1" cols="5" placeholder="¿Que quieres editar?"></textarea>
      </div>
      `;
      divElement.querySelector(`#btn-edit-${objNote.id}`).style.display = 'block';
      return post;
    });

  // agregando evento de click al btn eliminar una nota
  divElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  divElement.querySelector(`#btn-edit-${objNote.id}`)
    .addEventListener('click', () => editNoteOnSubmit(objNote));

  return divElement;
};

export default (notes) => {
  const home = document.createElement('div');
  const user = firebase.auth().currentUser;
  const formContent = `
    <nav>
      <ul>
        <li><a id="btn-profile">Perfil</a></li>
        <li><a id="btn-home">Inicio</a></li>
        <li><a id="btn-cerrar">Cerrar sesión</a></li>
      </ul>
    </nav>
    <!-- form add note -->
    <section>
      <figure>
        <div class="portada">
        
        </div>
        <div class="info-usuario"> 
        <p><img src="${user.photoURL}" class="foto-usuario"></p>
        <h3 id ="nombre-usuario">${user.displayName}</h3>
        </div>
      </figure>
      <main>
        <textarea name="" id="input-new-note" rows="4" cols="50" placeholder="¿Que quieres compartir?"></textarea>
        <section id="botones-post">
        <button id="btn-subir-img"> imagen </button>
        <button type="button" id="btn-add-note">Publicar</button>
        </section>
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
