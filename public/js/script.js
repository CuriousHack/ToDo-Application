// // Get reference to the button
const toggleButton = document.getElementById('toggleButton');
const formContainer = document.getElementById('formContainer');

toggleButton.addEventListener('click', () => {
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        toggleButton.textContent = 'x';
    } else {
        formContainer.classList.add('hidden');
        toggleButton.textContent = '+';
    }
});