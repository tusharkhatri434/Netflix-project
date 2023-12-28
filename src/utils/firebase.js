// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf_ebRDFIQoahJxd37TQTqfmQEPcOlUH0",
  authDomain: "zilix-ee81d.firebaseapp.com",
  projectId: "zilix-ee81d",
  storageBucket: "zilix-ee81d.appspot.com",
  messagingSenderId: "772197902872",
  appId: "1:772197902872:web:588ea84ba141e8c02db16d",
  measurementId: "G-SNWTVEQ0TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();