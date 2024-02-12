// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1PZkO7CWfWrz7U1DSlViF5884r_RWiw8",
  authDomain: "dayeappflutter.firebaseapp.com",
  projectId: "dayeappflutter",
  storageBucket: "dayeappflutter.appspot.com",
  messagingSenderId: "398705544101",
  appId: "1:398705544101:web:0aaf32abd8f5bada3e764c",
  measurementId: "G-HWYQF8189Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
