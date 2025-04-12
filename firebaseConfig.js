// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIn0JGnpqCVrKswO-7NOG6cS-S0JwjLMw",
    authDomain: "artmarketplace-b9d82.firebaseapp.com",
    projectId: "artmarketplace-b9d82",
    storageBucket: "artmarketplace-b9d82.firebasestorage.app",
    messagingSenderId: "45297249976",
    appId: "1:45297249976:web:e588fc6e53a341a2c14e4d",
    measurementId: "G-34J7ZWYFZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };