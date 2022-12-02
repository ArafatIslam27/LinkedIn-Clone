// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDanqLY5X55HMxyOlcOD6xjFBKUlLOnUZw",
  authDomain: "linkedin-clone-e6235.firebaseapp.com",
  projectId: "linkedin-clone-e6235",
  storageBucket: "linkedin-clone-e6235.appspot.com",
  messagingSenderId: "371766562943",
  appId: "1:371766562943:web:aedae7b21a15f3acea6f4a",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
