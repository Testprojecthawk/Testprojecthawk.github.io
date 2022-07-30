// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz_LPMJvU-aTwEebepihMPR5dYQ74LmD8",
  authDomain: "perphawkstudios.firebaseapp.com",
  projectId: "perphawkstudios",
  storageBucket: "perphawkstudios.appspot.com",
  messagingSenderId: "788103487607",
  appId: "1:788103487607:web:52eb85a4f80f551b4ca672",
  measurementId: "G-DV30QDZY44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);