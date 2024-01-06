// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTbHunqlxkhovidGsVPUxPRrG4NmwHN5k",
  authDomain: "vrn-company.firebaseapp.com",
  projectId: "vrn-company",
  storageBucket: "vrn-company.appspot.com",
  messagingSenderId: "136989922585",
  appId: "1:136989922585:web:19a63e73fafa10d17fa188",
  measurementId: "G-ET4SRYBECK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);