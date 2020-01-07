/* eslint-disable max-len */
/* eslint-disable no-undef */
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('users').doc(user.uid).set({
    usuario: user.displayName,
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


export const addNote = (textNewNote) => firebase.firestore().collection('notes').add({
  title: textNewNote,
  usuario: firebase.auth().currentUser.displayName,
  avatar: firebase.auth().currentUser.photoURL,
  uid: firebase.auth().currentUser.uid,
  date: firebase.firestore.FieldValue.serverTimestamp(),
});

export const editNote = (textNewNote, idNote) => firebase.firestore().collection('notes').doc(idNote.id).set({
  title: textNewNote,
  usuario: firebase.auth().currentUser.displayName,
  avatar: firebase.auth().currentUser.photoURL,
  uid: firebase.auth().currentUser.uid,
  date: firebase.firestore.FieldValue.serverTimestamp(),
});

export const deleteNote = (idNote) => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = (callback) => firebase.firestore().collection('notes')
  .onSnapshot((querySnapshot) => {
    const dato = [];
    querySnapshot.forEach((doc) => {
      dato.push({ id: doc.id, ...doc.data() });
    });
    callback(dato);
  });
