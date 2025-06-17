import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { app } from "./firebase.js"; // Ensure firebase.js exports app & db correctly

const auth = getAuth(app);
const db = getFirestore(app);

// Show the payment verification form when the "Verify Payment" button is clicked
document.getElementById('verify-payment-button').addEventListener('click', () => {
    let paymentForm = document.getElementById('payment-verification');
    paymentForm.style.display = 'block';

    // Auto-scroll to the payment verification form smoothly
    paymentForm.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Handle form submission
document.getElementById('submit-verification').addEventListener('click', async () => {
    const transactionMessage = document.getElementById('transaction-message').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Check if the message contains the required keywords
    const requiredKeywords = ['MOSES', 'ILUNGA'];
    const containsAllKeywords = requiredKeywords.every(keyword => transactionMessage.includes(keyword));

    if (containsAllKeywords) {
        try {
            // Ensure user is authenticated
            const user = auth.currentUser;
            if (!user) {
                alert("You must be logged in to submit a transaction.");
                return;
            }

            // Save transaction message to Firestore under the authenticated user's document
            await setDoc(doc(db, "users", user.uid), {
                message: transactionMessage,
                timestamp: serverTimestamp() // Use serverTimestamp instead of new Date()
            }, { merge: true });

            // Redirect to the success page
            window.location.href = 'success.html';

        } catch (error) {
            console.error("Error saving transaction:", error);
            alert("Failed to submit. Please try again.");
        }
    } else {
        // Show error message and scroll to it
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Invalid transaction message,kindly enter the correct message received from Airtel.";
        errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    }
});
