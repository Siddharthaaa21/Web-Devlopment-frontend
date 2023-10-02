// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpQnYeylXTXO-mFqp4aN7Nmu2povA-VGg",
  authDomain: "chat-app-firebase-f3f9e.firebaseapp.com",
  projectId: "chat-app-firebase-f3f9e",
  storageBucket: "chat-app-firebase-f3f9e.appspot.com",
  messagingSenderId: "23300695760",
  appId: "1:23300695760:web:9aeb5eb6550a76f75be0d5",
  measurementId: "G-CST87EDQH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider=new GoogleAuthProvider();
export const auth=getAuth();