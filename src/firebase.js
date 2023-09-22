import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBksCqtjCUozHLV1Yo5ln1vjSH64IXFmy4",
  authDomain: "gymate-tony.firebaseapp.com",
  projectId: "gymate-tony",
  storageBucket: "gymate-tony.appspot.com",
  messagingSenderId: "659466195898",
  appId: "1:659466195898:web:7d93ed65cabbd4a78e4383",
  measurementId: "G-FHTL6JQ3WW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
