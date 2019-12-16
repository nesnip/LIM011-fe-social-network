
// eslint-disable-next-line import/prefer-default-export
export const signIn = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
  // const errorCode = error.code;
export const logIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
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
