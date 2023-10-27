// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJm8VL4nfde8qJES0NfzkS50b5Lm4co5s",
  authDomain: "react-course-7452c.firebaseapp.com",
  projectId: "react-course-7452c",
  storageBucket: "react-course-7452c.appspot.com",
  messagingSenderId: "774477516836",
  appId: "1:774477516836:web:7fbaee55d36ecb597388b1",
  measurementId: "G-HQ52WVBGP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
