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
        window.location.href = 'loading.html'; // Redirect to next page
    });
});
