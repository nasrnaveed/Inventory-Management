// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkUYJNvZtzpFZx5fmZpagrL8Jj94sdZnM",
  authDomain: "inventory-management-e2573.firebaseapp.com",
  projectId: "inventory-management-e2573",
  storageBucket: "inventory-management-e2573.appspot.com",
  messagingSenderId: "104269329169",
  appId: "1:104269329169:web:0f58bece92269d115752b0",
  measurementId: "G-36Y8NT4YDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}