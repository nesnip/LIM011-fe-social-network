import {
  signIn, logIn, googleLogin, facebookLogin, signOut,
  addNote, addComment, deleteNote, saveUsers, editNote, countLove, dislike, deleteComments,
} from './controller/controller-firebase.js';

const changeHash = (hash) => {
  location.hash = hash;
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    // eslint-disable-next-line no-alert
    .then(() => alert('Datos Guardados'), changeHash('/logIn'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const loginWithGoogle = () => {
  googleLogin().then(() => {
    changeHash('/Home');
    saveUsers();
  });
};

export const loginWithFacebook = () => {
  facebookLogin().then(() => changeHash('/Home'));
};

export const logInOnSubmit = () => {
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;
  logIn(email, password)
    .then(() => changeHash('/Home'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const signOutSubmit = () => {
  signOut().then(() => {
    changeHash('/logIn');
    alert('Cerrando sesión');
  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};
export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-note');
  const select = document.getElementById('privacy');
  if (input.value === '') {
    alert('Campos vacíos');
  } else {
    addNote(input.value, select.value)
      .then((docRef) => {
        input.value = '';
        console.log('Document written with ID: ', docRef.id);
      }).catch((error) => {
        input.value = '';
        console.error('Error adding document: ', error);
      });
  }
};

export const editNoteOnSubmit = (objNote) => {
  const input = document.getElementById('input-edit-note');
  editNote(input.value, objNote)
    .then(() => {
      console.log('Document successfully updated');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
};
export const addCommentOnSubmit = (objNote) => {
  const inputComment = document.getElementById('input-comment-note');
  if (inputComment.value === '') {
    alert('Campos vacíos');
  } else {
    addComment(inputComment.value, objNote)
      .then(() => {
        console.log('Document successfully updated');
      //  data.message = 'Nota agregada';
      }).catch((error) => {
        console.error('Error updating document: ', error);
      //  data.message = 'Lo sentimos, no se pudo agregar la nota';
      });
  }
};
export const deleteNoteOnClick = (objNote) => deleteNote(objNote.id);

export const countLoveOnClick = (objNote) => {
  const user = firebase.auth().currentUser;
  console.log(objNote.lovers.some((element) => element.uid === user.uid));
  if (objNote.lovers.some((element) => element.uid === user.uid)) {
    dislike(objNote);
  } else {
    countLove(objNote);
  }
};

export const deleteCommentsOnClick = (objNote, i) => {
  deleteComments(objNote, i);
};
