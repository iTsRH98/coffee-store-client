// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGRRgx5r4CGVrNgZ6X-HFQJ-e--7dgz_o",
  authDomain: "coffee-store-app-741f1.firebaseapp.com",
  projectId: "coffee-store-app-741f1",
  storageBucket: "coffee-store-app-741f1.firebasestorage.app",
  messagingSenderId: "1020504335112",
  appId: "1:1020504335112:web:d18402f38d5948ed2c02bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);