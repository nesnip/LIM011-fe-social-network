
// eslint-disable-next-line import/prefer-default-export
export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
  // const errorCode = error.code;
