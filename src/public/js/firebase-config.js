// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTiszUjC6nNdAfkjkCiGDR37rkcKesC8o",
  authDomain: "ecomercescout.firebaseapp.com",
  projectId: "ecomercescout",
  storageBucket: "ecomercescout.appspot.com",
  messagingSenderId: "141064017870",
  appId: "1:141064017870:web:e51b541a60fc2d881b3d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;