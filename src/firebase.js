import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbkgSmYnKglavmillrMk2uPB2A2hPddmQ",
    authDomain: "disney-clone-8415a.firebaseapp.com",
    projectId: "disney-clone-8415a",
    storageBucket: "disney-clone-8415a.appspot.com",
    messagingSenderId: "494628080787",
    appId: "1:494628080787:web:7fc32af64f9d8f5ab51166",
    measurementId: "G-9P70NBGEPS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;