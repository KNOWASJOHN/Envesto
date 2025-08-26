import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBAADEkqE7I8g5fGgeumssy3GJRAwHpAM8",
  authDomain: "envesto-899ca.firebaseapp.com",
  databaseURL: "https://envesto-899ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "envesto-899ca",
  storageBucket: "envesto-899ca.appspot.com",
  messagingSenderId: "943284124856",
  appId: "1:943284124856:web:e4ef4af7620b885c3b884d",
  measurementId: "G-VE2RW3ZGPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Realtime Database instances
export const auth = getAuth(app);
export const db = getDatabase(app);
