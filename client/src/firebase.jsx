// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6b0c0.firebaseapp.com",
  projectId: "mern-estate-6b0c0",
  storageBucket: "mern-estate-6b0c0.firebasestorage.app",
  messagingSenderId: "110291810048",
  appId: "1:110291810048:web:1e2db5e813caa8c12de5e5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);