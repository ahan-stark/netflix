// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyB7bTaKdtlI6_DaHYlpf1ubNQX6nKAuHEU", 
  authDomain: "netflix-c7dde.firebaseapp.com",
  projectId: "netflix-c7dde",
  storageBucket: "netflix-c7dde.appspot.com",
  messagingSenderId: "747748782462",
  appId: "1:747748782462:web:32852ba6d7692bef92032f",
  measurementId: "G-E5RBCQQJ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();