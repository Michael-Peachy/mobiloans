import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { app } from "./firebase.js";  

const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (form && emailInput && passwordInput && errorMessage && loadingSpinner) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Hide previous error message
            errorMessage.style.display = 'none';
            loadingSpinner.style.display = 'none';

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.textContent = "Please enter a valid email.";
                errorMessage.style.display = 'block';
                return;
            }

            // Password validation
            if (password.length < 6) {
                errorMessage.textContent = "Password must be at least 6 characters.";
                errorMessage.style.display = 'block';
                return;
            }

            try {
                // Show loading spinner
                loadingSpinner.style.display = 'block';

                // Sign in user
                await signInWithEmailAndPassword(auth, email, password);

                // Hide spinner and redirect
                loadingSpinner.style.display = 'none';
                window.location.href = 'eligibility-details.html';
            } catch (error) {
                console.error("Login error:", error);

                // Hide spinner and show error message
                loadingSpinner.style.display = 'none';
                errorMessage.textContent = "Invalid email or password.";
                errorMessage.style.display = 'block';
            }
        });
    } else {
        console.error('One or more elements not found');
    }
});
