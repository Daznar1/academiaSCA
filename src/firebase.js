// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX9TTlqsRjFoawYrLYhFWlpL4BQixDuFM",
  authDomain: "academia-de-vela-sca.firebaseapp.com",
  projectId: "academia-de-vela-sca",
  storageBucket: "academia-de-vela-sca.appspot.com",
  messagingSenderId: "361715589300",
  appId: "1:361715589300:web:af19a8cc1bd16c177f77e1",
  measurementId: "G-8ZJQXZSHTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);