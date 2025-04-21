// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIq4nrMsBrf3K4x28qGiWBRbgb5uSe6cQ",
  authDomain: "ai-preparation.firebaseapp.com",
  projectId: "ai-preparation",
  storageBucket: "ai-preparation.firebasestorage.app",
  messagingSenderId: "204163648010",
  appId: "1:204163648010:web:31ee019256c7b2a486edf3",
  measurementId: "G-HGR1H26R45",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
