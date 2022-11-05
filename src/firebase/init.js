// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBQiAaBhZSN9Fglp5ceLMVD5h8SGlQeAU",
  authDomain: "hackathon-database-8f906.firebaseapp.com",
  projectId: "hackathon-database-8f906",
  storageBucket: "hackathon-database-8f906.appspot.com",
  messagingSenderId: "35452127252",
  appId: "1:35452127252:web:26b95b40983ddf809abf01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();