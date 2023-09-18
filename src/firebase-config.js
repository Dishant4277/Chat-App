// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQl5z853sxFLBlUjgLOlx1gvq5kkwELY",
  authDomain: "chat-app-3361c.firebaseapp.com",
  projectId: "chat-app-3361c",
  storageBucket: "chat-app-3361c.appspot.com",
  messagingSenderId: "866927171493",
  appId: "1:866927171493:web:5a605cbf5a42125c08ba4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
