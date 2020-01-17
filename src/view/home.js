import {
  signOutSubmit, addNoteOnSubmit, deleteNoteOnClick, editNoteOnSubmit,
  countLoveOnClick, addCommentOnSubmit, deleteCommentsOnClick,
} from '../view-controller.js';

const itemNote = (objNote) => {
  const user = firebase.auth().currentUser;
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <div class="container-post">
    <div class="btn-post">
    <span id="btn-deleted-${objNote.id}">${user.uid === objNote.uid ? '<img id="trash" src="imagenes/remove.png" title="Eliminar"/>' : ''}</span>
    <span id="btn-pen-${objNote.id}">${user.uid === objNote.uid ? '<img id="btn-pen" src="imagenes/pencil.png" title="Editar"/>' : ''}</span>
    </div>
      <div class="photo-avatar">
        <p>${objNote.avatar === null ? '<img src="../imagenes/user.svg" class="avatar-usuario">' : `<img src="${objNote.avatar}" class="avatar-usuario">`}</p>
        <div class="date">
          <p id ="nombre-usuario">Publicado por ${objNote.user}</p>
          <p id ="date-post">${objNote.date.toDate()}</p>
        </div>
      </div>
      <section class="texto-post" id="texto-post-${objNote.id}">
        <p>${objNote.title}</p>
      </section>
      <div class = "reactions">
        <span id ="reaction-love">${objNote.love} </span> <img src="https://purepng.com/public/uploads/medium/heart-icon-s4k.png" id="love" />
        <span class="btn-comment-cont" id="btn-comment-${objNote.id}"><img id="btn-comment" src="imagenes/comment.png" title="comentar"/></span> 
      </div>
    </div>
    <ul id="comments-container"></ul>
  `;

  // Agregando evento click al btn pen para MOSTRAR INPUT Y BOTÓN EDITAR
  divElement.querySelector(`#btn-pen-${objNote.id}`)
    .addEventListener('click', () => {
      const post = document.querySelector(`#texto-post-${objNote.id}`);
      post.innerHTML = `
      <div class="">
        <textarea id="input-edit-note"></textarea>
        <button id="btn-edit-${objNote.id}">Guardar cambios</button>
        <button id="cancel">Cancelar</button>
      </div>
      `;
      // Agregando evento click al btn CANCELAR EDICIÓN de post
      post.querySelector('#cancel').addEventListener('click', () => {
        post.innerHTML = `<p>${objNote.title}</p>`;
      });
      post.querySelector('#input-edit-note').value = objNote.title;
      // Agregando evento click al btn EDITAR POST
      post.querySelector(`#btn-edit-${objNote.id}`)
        .addEventListener('click', () => editNoteOnSubmit(objNote));
      return post;
    });

  // Agregando evento click a btn comentar para AGREGAR COMENTARIO
  divElement.querySelector(`#btn-comment-${objNote.id}`).addEventListener('click', () => {
    const comment = document.querySelector(`#comments-${objNote.id}`);
    comment.innerHTML = `
      <textarea id="input-comment-note" placeholder="Escribir un comentario..."></textarea> 
      <span id="btn-add-${objNote.id}"><img id="btn-add-comment" src="imagenes/send.png" title="agregar"/></span>
     `;
    // Evento click a btn add comment
    comment.querySelector(`#btn-add-${objNote.id}`)
      .addEventListener('click', () => addCommentOnSubmit(objNote));
    return comment;
  });

  // MOSTRANDO COMENTARIOS de cada post
  objNote.comments.forEach((element, index) => {
    const ul = divElement.querySelector('#comments-container');
    const liElement = document.createElement('li');
    liElement.classList.add('comment-li');
    liElement.innerHTML = `
      <img src="${element.photoUserComment}" class="avatar-usuario avatar-comment">
      <span class="user-comment">${element.userComment}</span>
      <span id="btn-deleted-${index}" class="delete-comment">${user.uid === element.uidComment || user.uid === objNote.uid ? '<img id="trash" src="imagenes/remove.png" title="Eliminar"/>' : ''}</span>
      <p id="element-comment">${element.comment}</p>
    `;
    ul.appendChild(liElement);
    // Agregando evento click a btn BORRAR COMENTARIO
    liElement.querySelector(`#btn-deleted-${index}`)
      .addEventListener('click', () => {
        console.log(`#btn-deleted-${index}`);
        deleteCommentsOnClick(objNote, index);
      });
  });

  // Agregando evento click al btn LOVE de un post
  divElement.querySelector('#love')
    .addEventListener('click', () => countLoveOnClick(objNote));

  // Agregando evento de click al btn ELIMINAR UNA NOTA
  divElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));

  return divElement;
};

export default (notes) => {
  const home = document.createElement('div');
  home.classList.add('home-style');
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
        <img src="${user.photoURL}" class="foto-usuario">
        <div><h3 class ="user-prof-name">${user.displayName}</h3></div>
        </div>
      </figure>
      <main>
      <!-- post privacy -->
      <div class ="post-privacy">
      <label> Privacidad : </label>
      <select id="privacy"> 
      <option value="public"> Público </option>
      <option value="private"> Privado </option>
      </select>
      </div>
        <textarea name="" id="input-new-note" rows="4" cols="50" placeholder="¿Que quieres compartir?"></textarea>
        <section id="botones-post">
        <button id="btn-subir-img"> Imagen </button>
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
  const div = home.querySelector('#notes-list');
  const buttonAddNote = home.querySelector('#btn-add-note');
  notes.forEach((note) => {
    div.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return home;
};
