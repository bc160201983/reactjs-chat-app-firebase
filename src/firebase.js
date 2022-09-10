import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTbwdnXmBt4Et6I6fBp-xUHas4xxotqps",
  authDomain: "chat-d1ac6.firebaseapp.com",
  projectId: "chat-d1ac6",
  storageBucket: "chat-d1ac6.appspot.com",
  messagingSenderId: "346300578233",
  appId: "1:346300578233:web:3579c835a99b84edd8de68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
