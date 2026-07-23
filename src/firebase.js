import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA-3vBQcmsHt_sRSrzjyH2-OATv0A9k-vY",
  authDomain: "my-gym-tracker-9a7a8.firebaseapp.com",
  projectId: "my-gym-tracker-9a7a8",
  storageBucket: "my-gym-tracker-9a7a8.firebasestorage.app",
  messagingSenderId: "859369757702",
  appId: "1:859369757702:web:6a75a65057200495a97787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
