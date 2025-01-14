// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyB9aPsMZRQwOUnjIUa0Besgo9gkuMOwE6s",
  authDomain: "e-commerce-website-24f4a.firebaseapp.com",
  projectId: "e-commerce-website-24f4a",
  storageBucket: "e-commerce-website-24f4a.firebasestorage.app",
  messagingSenderId: "831147183326",
  appId: "1:831147183326:web:78de5e77b18cc34e98064f",
  measurementId: "G-8F874KXZSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;