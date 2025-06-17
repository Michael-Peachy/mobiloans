import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', function () {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((docSnap) => {
            if (docSnap.exists()) {
                const userData = docSnap.data();
                document.getElementById('account-name').textContent = userData.accountName || 'Not Provided';
                document.getElementById('account-number').textContent = userData.accountNumber || 'Not Provided';
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.error("Error getting document:", error);
        });
    } else {
        console.log("No user is signed in.");
    }
});
