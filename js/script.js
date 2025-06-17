
// Eligibility Details Form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('eligibility-details-form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

       /* // Get form data (optional if you need to process them)
        const education = document.getElementById('education').value;
        const employment = document.getElementById('employment').value;
        const income = document.getElementById('income').value;
        const loanPurpose = document.getElementById('loan-purpose').value;
        const refereeName = document.getElementById('referee-name').value;
        const refereePhone = document.getElementById('referee-phone').value;
        const relationship = document.getElementById('relationship').value;
*/

        // After form submission, redirect to eligibilitysuccessful.html
        window.location.href = 'eligibilitysuccessful.html'; // Redirect to next page
    });
});

// Loading Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress');
    const checkLimitButton = document.getElementById('check-limit-button');

    if (progressBar && checkLimitButton) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10; // progress by 10% interval
            progressBar.style.width = `${progress}%`;

        
            if (progress >= 100) {
                clearInterval(interval);
                checkLimitButton.classList.remove('hidden'); // Show the button
            }
        }, 500); // Adjust the interval speed (500ms = 0.5 seconds)
    }

    // Redirect to Loan Limit Page
    checkLimitButton?.addEventListener('click', () => {
        window.location.href = 'loan-limit.html';
    });
});
// Redirect to Loan Limit Page
checkLimitButton?.addEventListener('click', () => {
    window.location.href = 'loan-limit.html';
});

// Loan Limit Page Functionality
const loanOptions = document.querySelectorAll('.loan-option');
const submitLoanButton = document.getElementById('submit-loan-button');

loanOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (!option.classList.contains('inactive')) {
            loanOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        }
    });
});

submitLoanButton?.addEventListener('click', () => {
    const selectedOption = document.querySelector('.loan-option.selected');
    if (selectedOption) {
        alert('Loan option submitted successfully!');
        // Redirect 
    } else {
        alert('Please select a loan option.');
    }
});
const button1=document.getElementById('subs');
button1.addEventListener('click', () =>{
    alert('hello Roy');
});