// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQyHcbr6S5O9MpYvF1JL_iaOz3Ko-NOKY",
  authDomain: "entropy-progamacion.firebaseapp.com",
  projectId: "entropy-progamacion",
  storageBucket: "entropy-progamacion.appspot.com",
  messagingSenderId: "1093086654397",
  appId: "1:1093086654397:web:35cc593c86f2096e542cd4",
  measurementId: "G-TT5RJB553N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);