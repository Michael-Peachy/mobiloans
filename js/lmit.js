
document.addEventListener("DOMContentLoaded", function () {
    const loanOptions = document.querySelectorAll(".loan-option:not(.inactive)");
    const submitButton = document.getElementById("submit-loan-button");

    let selectedOption = null;

    loanOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove previous selection
            if (selectedOption) {
                selectedOption.classList.remove("selected");
            }

            // Select new option
            this.classList.add("selected");
            selectedOption = this;

            // Enable submit button
            submitButton.disabled = false;
        });
    });

    // Redirect on submit button click
    submitButton.addEventListener("click", function () {
        if (selectedOption) {
            window.location.href = "els.html"; // Redirect to the next page
        }
    });
});



