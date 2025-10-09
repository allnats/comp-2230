function validateForm() {}

const eventRegistrationForm = document.getElementById("eventRegistrationForm");
eventRegistrationForm.addEventListener("submit", (event) => {
    // Let's validate it first by pausing the default submit event.
    event.preventDefault();
});
