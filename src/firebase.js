import   firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD38Z8GOyoHrCRCupULVIdUW-xRhFEKFQ8",
  authDomain: "crud-app-f8343.firebaseapp.com",
  projectId: "crud-app-f8343",
  storageBucket: "crud-app-f8343.appspot.com",
  messagingSenderId: "55704543199",
  appId: "1:55704543199:web:613c570311034c1b8e6e6a",
  measurementId: "G-J326TZDP1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
