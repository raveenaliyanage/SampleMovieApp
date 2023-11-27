// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sot5r5JppRiTd7AXYd3gls4w0qfv1i4",
  authDomain: "samplemovie-c635a.firebaseapp.com",
  projectId: "samplemovie-c635a",
  storageBucket: "samplemovie-c635a.appspot.com",
  messagingSenderId: "318159408263",
  appId: "1:318159408263:web:19ef3679cf0192b5987c22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getAuth(app);