import   firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZcEdntvkquGb1uXbdeUcnxXWKSjEPFEU",
  authDomain: "subject-crud.firebaseapp.com",
  projectId: "subject-crud",
  storageBucket: "subject-crud.appspot.com",
  messagingSenderId: "48030750339",
  appId: "1:48030750339:web:5a7a66874b3545c9022db6",
  measurementId: "G-XF812G1QDT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
