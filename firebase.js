// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUnuM_CuPkIUyRk-BwNdfBmc2vY4aGNc",
  authDomain: "fir-wasted.firebaseapp.com",
  projectId: "fir-wasted",
  storageBucket: "fir-wasted.appspot.com",
  messagingSenderId: "308073899632",
  appId: "1:308073899632:web:650f5d6fcbdaef4f1df6b5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app()
}
const auth = firebase.auth()

export {auth};
