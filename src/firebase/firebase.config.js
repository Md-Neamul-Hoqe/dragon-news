// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihKy94AUMOxdWQKAVBaXd2DluJFaT8xg",
  authDomain: "react-dragon-news-38e6d.firebaseapp.com",
  projectId: "react-dragon-news-38e6d",
  storageBucket: "react-dragon-news-38e6d.appspot.com",
  messagingSenderId: "1069755583869",
  appId: "1:1069755583869:web:26fe7e7ab617dbd1739014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
