// Get the container and buttons
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const mainContainer = document.getElementById('main-container');

// Get the URL query parameters
const queryParams = new URLSearchParams(window.location.search);
const intent = queryParams.get('intent');

// Activate appropriate form based on intent parameter
if (intent === 'signup') {
  mainContainer.classList.add("right-panel-active")
}

// Add click event listeners to buttons
signUpButton.addEventListener('click', () => {
  mainContainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  mainContainer.classList.remove("right-panel-active");
});
