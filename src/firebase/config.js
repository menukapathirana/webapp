import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwjIaDHJotPnIH2A2lLN3ZbvtgLorYpqs",
    authDomain: "auth-prod-8b603.firebaseapp.com",
    projectId: "auth-prod-8b603",
    storageBucket: "auth-prod-8b603.appspot.com",
    messagingSenderId: "665527609747",
    appId: "1:665527609747:web:9d97bf7450db980d546066"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp };