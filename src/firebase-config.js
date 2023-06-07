// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX4fH0bO1n-iA6F3I9vY2YKiKpn2Tmmto",
  authDomain: "kromotto-a5d43.firebaseapp.com",
  projectId: "kromotto-a5d43",
  storageBucket: "kromotto-a5d43.appspot.com",
  messagingSenderId: "365739973800",
  appId: "1:365739973800:web:178b7cb0c3d5c5ebd6f69d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);