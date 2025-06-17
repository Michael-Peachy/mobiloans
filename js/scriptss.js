import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('eligibility-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordMessage = document.getElementById('password-message');
    const emailMessage = document.getElementById('email-message');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Validate email format
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailMessage.textContent = "Please enter a valid email.";
            emailMessage.style.display = "block";
            return false;
        } else {
            emailMessage.style.display = "none";
            return true;
        }
    };

    // Validate password length
    const validatePasswordLength = () => {
        if (passwordInput.value.length < 6) {
            passwordMessage.textContent = "Password must be at least 6 characters long.";
            passwordMessage.style.display = "block";
            return false;
        } else {
            passwordMessage.style.display = "none";
            return true;
        }
    };

    // Check if passwords match
    const checkPasswordsMatch = () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMessage.textContent = "Passwords do not match.";
            passwordMessage.style.display = "block";
            return false;
        } else {
            passwordMessage.style.display = "none";
            return true;
        }
    };

    // Event listeners for real-time validation
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", () => {
        validatePasswordLength();
        checkPasswordsMatch();
    });
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Hide spinner at the start
        loadingSpinner.style.display = "none";

        const name = document.getElementById('name').value;
        const email = emailInput.value;
        const phone = document.getElementById('phone').value;
        const password = passwordInput.value;

        // Final validation before submission
        if (!validateEmail() || !validatePasswordLength() || !checkPasswordsMatch()) {
            return; // Stop execution if there's an error
        }

        try {
            // Show loading spinner before sending request
            loadingSpinner.style.display = "block";

            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store additional user information in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                phone: phone
            });

            // Hide spinner and redirect
            loadingSpinner.style.display = "none";
            window.location.href = 'login.html';
        } catch (error) {
            console.error("Error during registration:", error);

            // Hide spinner if an error occurs
            loadingSpinner.style.display = "none";

            // Display Firebase error message
            emailMessage.textContent = error.message;
            emailMessage.style.display = "block";
        }
    });
});