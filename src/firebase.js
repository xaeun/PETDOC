// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB213pEF2Y_QOk1XDYppTauFoSpcoX97Q",
  authDomain: "petdoc-f0a0a.firebaseapp.com",
  projectId: "petdoc-f0a0a",
  storageBucket: "petdoc-f0a0a.appspot.com",
  messagingSenderId: "181168259049",
  appId: "1:181168259049:web:a47dc6b648b22e46bf1578"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
