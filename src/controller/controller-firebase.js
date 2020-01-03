/* eslint-disable max-len */
/* eslint-disable no-undef */
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

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
});

export const deleteNote = (idNote) => firebase.firestore().collection('notes').doc(idNote).delete();

export const getNotes = (callback) => firebase.firestore().collection('notes')
  .onSnapshot((querySnapshot) => {
    const dato = [];
    querySnapshot.forEach((doc) => {
      dato.push({ id: doc.id, ...doc.data() });
      console.log(doc.data());
    });
    console.log(dato);
    callback(dato);
  });
