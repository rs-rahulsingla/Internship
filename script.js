document.addEventListener("DOMContentLoaded", function () {
    const toggleIngredientsBtn = document.querySelector('.toggle-ingredients-btn');
    const ingredientsList = document.querySelector('.ingredients');
    const toggleStepsBtn = document.querySelector('.toggle-steps-btn');
    const stepsList = document.querySelector('.steps');
    const startCookingBtn = document.querySelector('.start-cooking-btn');
    const progressBar = document.querySelector('.progress');
    const progressBarContainer = document.querySelector('.progress-bar');
    let currentStep = 0;

    // Toggle Ingredients Visibility
    toggleIngredientsBtn.addEventListener('click', function () {
        ingredientsList.classList.toggle('hidden');
        toggleIngredientsBtn.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
    });

    // Toggle Steps Visibility
    toggleStepsBtn.addEventListener('click', function () {
        stepsList.classList.toggle('hidden');
        toggleStepsBtn.textContent = stepsList.classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
    });

    // Start Cooking and Highlight Steps
    startCookingBtn.addEventListener('click', function () {
        const steps = document.querySelectorAll('.steps li');
        if (currentStep < steps.length) {
            steps[currentStep].style.color = '#4caf50'; // Highlight the current step
            currentStep++;
            const progressPercentage = (currentStep / steps.length) * 100;
            progressBar.style.width = progressPercentage + '%';
        } else {
            alert("Cooking complete!");
        }
        progressBarContainer.style.display = 'block';
    });
});
