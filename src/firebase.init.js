// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxo8zQPvyv8USbLWPmqGE7BT1JgwZQp7I",
  authDomain: "sunsine-task-1.firebaseapp.com",
  projectId: "sunsine-task-1",
  storageBucket: "sunsine-task-1.appspot.com",
  messagingSenderId: "592677176994",
  appId: "1:592677176994:web:26d250c054c0e60d9fb9fb",
  measurementId: "G-37LC8XXHSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
