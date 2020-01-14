/* eslint-disable max-len */
/* eslint-disable no-undef */
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('users').doc(user.uid).set({
    user: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
    email: user.email,
  });
};

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => firebase.auth().signOut();
export const addNote = (textNewNote, selectPrivacy) => firebase.firestore().collection('notes').add({
  title: textNewNote,
  user: firebase.auth().currentUser.displayName,
  avatar: firebase.auth().currentUser.photoURL,
  uid: firebase.auth().currentUser.uid,
  date: firebase.firestore.Timestamp.fromDate(new Date()),
  privacy: selectPrivacy,
  love: 0,
  lovers: [],
  comments: [],
});

export const editNote = (textEditNote, objNote) => firebase.firestore().collection('notes').doc(objNote.id).update({
  title: textEditNote,
});
export const deleteNote = (idNote) => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = (callback) => firebase.firestore().collection('notes').orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    const dato = [];
    const user = firebase.auth().currentUser;
    querySnapshot.forEach((doc) => {
      if (doc.data().privacy === 'public') {
        dato.push({ id: doc.id, ...doc.data() });
      } if (doc.data().privacy === 'private' && doc.data().uid === user.uid) {
        dato.push({ id: doc.id, ...doc.data() });
      }
    });
    callback(dato);
  });

export const addComment = (textComment, objNote) => firebase.firestore().collection('notes').doc(objNote.id).update({
  comments: objNote.comments.concat({
    uidComment: firebase.auth().currentUser.uid,
    photoUserComment: firebase.auth().currentUser.photoURL,
    userComment: firebase.auth().currentUser.displayName,
    comment: textComment,
    dateComment: firebase.firestore.Timestamp.fromDate(new Date()),
  }),
});

export const countLove = (objNote) => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('notes').doc(objNote.id).update({
    love: firebase.firestore.FieldValue.increment(1),
    lovers: objNote.lovers.concat([
      {
        user: user.displayName,
        uid: user.uid,
      },
    ]),
  });
};

export const dislike = (objNote) => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('notes').doc(objNote.id).update({
    love: firebase.firestore.FieldValue.increment(-1),
    lovers: objNote.lovers.filter((element) => element.uid !== user.uid),
  });
};

export const deleteComments = (objNote, i) => {
  firebase.firestore().collection('notes').doc(objNote.id).update({
    comments: objNote.comments.filter((element, position) => position !== i),
  });
};
