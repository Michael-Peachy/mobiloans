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
        }, 2000); // Adjust the interval speed (500ms = 0.5 seconds)
    }

    // Redirect to Loan Limit Page
    checkLimitButton?.addEventListener('click', () => {
        window.location.href = 'll.html';
    });
});

