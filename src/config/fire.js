import firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyDDiJYKgdq0_Lmke87batZGDmc6oJ_ahnk",
  authDomain: "spik-n-span.firebaseapp.com",
  databaseURL: "https://spik-n-span.firebaseio.com",
  projectId: "spik-n-span",
  storageBucket: "spik-n-span.appspot.com",
  messagingSenderId: "1072091915439"
};
export const fire = firebase.initializeApp(config);
