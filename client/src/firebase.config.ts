// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCOE6uRaEuLzH8gqhC5W0Hrl_iXZnw89w",
  authDomain: "house-marketplace-app-378dd.firebaseapp.com",
  projectId: "house-marketplace-app-378dd",
  storageBucket: "house-marketplace-app-378dd.appspot.com",
  messagingSenderId: "107510003827",
  appId: "1:107510003827:web:fbe051b551ffd21d1f1206",
  measurementId: "G-885EYKPQ62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export const db = getFirestore()