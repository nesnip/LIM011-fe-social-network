
// eslint-disable-next-line import/prefer-default-export
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
  // const errorCode = error.code;
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);