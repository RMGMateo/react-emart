import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT2nHMGi2kkWDA2ROCs2j-Dw2uT87ekps",
  authDomain: "react-emart-112a1.firebaseapp.com",
  projectId: "react-emart-112a1",
  storageBucket: "react-emart-112a1.appspot.com",
  messagingSenderId: "370603957220",
  appId: "1:370603957220:web:6fa7a78c270829172285f1"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 
  