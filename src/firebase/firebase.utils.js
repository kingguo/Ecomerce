import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAc1PZklEwlUqX3EJWy5rOjvwdW4Y-Psh0",
  authDomain: "crwn-db-75d04.firebaseapp.com",
  databaseURL: "https://crwn-db-75d04.firebaseio.com",
  projectId: "crwn-db-75d04",
  storageBucket: "",
  messagingSenderId: "961647944493",
  appId: "1:961647944493:web:e7adb1acf7e37043"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
