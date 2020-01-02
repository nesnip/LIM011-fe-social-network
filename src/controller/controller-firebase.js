/* eslint-disable no-unused-vars */

// eslint-disable-next-line max-len
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// const errorCode = error.code;
// eslint-disable-next-line max-len
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
export const addPost = (textPost) => firebase.firestore().collection('posts').add({
  title: textPost,
});
export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();
