import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("xmdCzCsxVsbRdj2B59wf")
  .collection("Card");
