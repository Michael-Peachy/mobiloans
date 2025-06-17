// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

 // Your web app's Firebase configuration

 const firebaseConfig = {

    apiKey: "AIzaSyCXZbqg15cUA2TqvRX1agjSx7KCUDJ9CiY",

    authDomain: "swftlns.firebaseapp.com",

    projectId: "swftlns",

    storageBucket: "swftlns.firebasestorage.app",

    messagingSenderId: "419900281809",

    appId: "1:419900281809:web:905b25fb919e140b1e06f0"

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

// Export db to be used in other files
export { db,app };
