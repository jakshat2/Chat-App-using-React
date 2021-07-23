import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYqJ4QUiqjwBCo4smziL6Os8tzRkBCLw4",
  authDomain: "facebook-messenger-clone-51878.firebaseapp.com",
  projectId: "facebook-messenger-clone-51878",
  storageBucket: "facebook-messenger-clone-51878.appspot.com",
  messagingSenderId: "771746243354",
  appId: "1:771746243354:web:9963eaeaf2451dd13802a3",
  measurementId: "G-Q8JWPBR4N7",
});

const db = firebaseApp.firestore();

export default db;
