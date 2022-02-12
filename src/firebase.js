// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGhsb4drARP7TiSmYf10usK84Klz--l6A",
  authDomain: "news-box-7ccde.firebaseapp.com",
  databaseURL: "https://news-box-7ccde-default-rtdb.firebaseio.com",
  projectId: "news-box-7ccde",
  storageBucket: "news-box-7ccde.appspot.com",
  messagingSenderId: "779260968038",
  appId: "1:779260968038:web:ddccf21e51473c5f2bc1a7",
  measurementId: "G-5M46686NF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);