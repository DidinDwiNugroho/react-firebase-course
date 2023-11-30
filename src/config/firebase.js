import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPWG6cKMSeGJE7x3R6o2TZVbyXFz4JTPA",
  authDomain: "fir-course-e0be1.firebaseapp.com",
  projectId: "fir-course-e0be1",
  storageBucket: "fir-course-e0be1.appspot.com",
  messagingSenderId: "580043986011",
  appId: "1:580043986011:web:ddd759e27d18ff77651b7e",
  measurementId: "G-BXH1BYR4DB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
