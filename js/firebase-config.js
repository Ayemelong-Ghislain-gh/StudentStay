// js/firebase-config.js
// Replace with YOUR actual Firebase config from Firebase Console

const firebaseConfig = {
  apiKey: "AIzaSyAo9QPcaUOo5-ye80tBvkauG16YHX6ONS0",
  authDomain: "studentstay-79d1c.firebaseapp.com",
  projectId: "studentstay-79d1c",
  storageBucket: "studentstay-79d1c.firebasestorage.app",
  messagingSenderId: "920436246262",
  appId: "1:920436246262:web:2d46ccfb18b54ce5860ed7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();