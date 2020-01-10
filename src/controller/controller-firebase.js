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


export const addNote = (textNewNote, privacidad) => firebase.firestore().collection('notes').add({
  title: textNewNote,
  user: firebase.auth().currentUser.displayName,
  avatar: firebase.auth().currentUser.photoURL,
  uid: firebase.auth().currentUser.uid,
  date: firebase.firestore.Timestamp.fromDate(new Date()),
  privacy: privacidad,
  love: 0,
  lovers: [],
});

export const editNote = (textEditNote, objNote) => firebase.firestore().collection('notes').doc(objNote.id).update({
  title: textEditNote,
});

export const deleteNote = (idNote) => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = (callback) => firebase.firestore().collection('notes').orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    const dato = [];
    querySnapshot.forEach((doc) => {
      dato.push({ id: doc.id, ...doc.data() });
      console.log(doc.data());
    });
    console.log(dato);
    callback(dato);
    console.log(callback);
  });

export const countLove = (objNote, i) => firebase.firestore().collection('notes').doc(objNote.id).update({
  love: firebase.firestore.FieldValue.increment(i),
  lovers: objNote.lovers.concat([firebase.auth().currentUser.displayName]),
});
