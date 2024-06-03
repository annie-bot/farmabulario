// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYWe28yroCFnnk10q22QzDym1F5eOhPF0",
  authDomain: "qrmed-eec2c.firebaseapp.com",
  projectId: "qrmed-eec2c",
  storageBucket: "qrmed-eec2c.appspot.com",
  messagingSenderId: "8937982417",
  appId: "1:8937982417:web:acacde61afe7292705f8f0",
  measurementId: "G-82NBV80V40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);