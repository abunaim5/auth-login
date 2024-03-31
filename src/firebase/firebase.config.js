// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnkM-G5Ae4TqVcinIAS2g248GGzWfoCM",
  authDomain: "auth-login-11dc2.firebaseapp.com",
  projectId: "auth-login-11dc2",
  storageBucket: "auth-login-11dc2.appspot.com",
  messagingSenderId: "844779926617",
  appId: "1:844779926617:web:4ff35c9d319e5ffc926d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;