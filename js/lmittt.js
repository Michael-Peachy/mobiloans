import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { app } from "./firebase.js"; 

const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const userNameElement = document.getElementById('name');
    const userPhoneElement = document.getElementById('phone');

    // Listen for authentication state changes
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // User is signed in
            try {
                // Fetch user data from Firestore
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const userName = userData.name; 
                    const userPhone = userData.phone;
                    userNameElement.textContent = userName; // Update the placeholder with the user's name
                    userPhoneElement.textContent = userPhone;
                } else {
                    console.error("No such user found in Firestore.");
                }
            } catch (error) {
                console.error("Error fetching user data: ", error);
            }
        } else {
            // User is signed out
            console.log("User is not authenticated.");
            // Optionally, redirect to the login page
            // window.location.href = 'login.html';
        }
    });
});
