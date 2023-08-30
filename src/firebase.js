// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc }  from "firebase/firestore";
import { getAuth, GoogleAuthProvider }  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHFJ1nfT2hJyHTnzrK_JA661BY9kwgXs",
  authDomain: "financely-rec-87b66.firebaseapp.com",
  projectId: "financely-rec-87b66",
  storageBucket: "financely-rec-87b66.appspot.com",
  messagingSenderId: "773068639825",
  appId: "1:773068639825:web:a1f945f27eb51bbfd77270",
  measurementId: "G-BYYRSY2W52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{db, auth, provider, doc, setDoc}