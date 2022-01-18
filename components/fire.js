// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
//import {firebase} from 'firebase/app'
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxVAKUYvft5R2vwvelqAkNIpMWcmejdCk",
  authDomain: "app-test-project-81931.firebaseapp.com",
  projectId: "app-test-project-81931",
  storageBucket: "app-test-project-81931.appspot.com",
  messagingSenderId: "847138987548",
  appId: "1:847138987548:web:a131447b1983532ba3c9d9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;