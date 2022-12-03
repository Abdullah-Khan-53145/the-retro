// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYdI3SKke4V2F_dFqFA8PnkaNAubjVpg",
  authDomain: "the-retro-ef490.firebaseapp.com",
  projectId: "the-retro-ef490",
  storageBucket: "the-retro-ef490.appspot.com",
  messagingSenderId: "853768992186",
  appId: "1:853768992186:web:cd5859e0c21d5096699983",
  measurementId: "G-YM8NE8DPJ0",
};

// Initialize Firebasenpm
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider, db };
