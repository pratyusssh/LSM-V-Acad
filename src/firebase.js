import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJYPYN-pCQ5SFR313ECWi9Xcvqa2rVNCc",
  authDomain: "v-academics.firebaseapp.com",
  projectId: "v-academics",
  storageBucket: "v-academics.appspot.com",
  messagingSenderId: "207777206779",
  appId: "1:207777206779:web:05fdb1eb5dfa70d9357b5e",
  measurementId: "G-5NH0ZDX2DK"
  };
// const firebaseApp = firebase.initializeApp(fireba)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;