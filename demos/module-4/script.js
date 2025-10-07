/*
    Javascript Forms Demo
    Allendale Nato
    Oct 7, 2025
*/

// Grab a ref to our form
const form = document.getElementById("userForm");
form.addEventListener("submit", (event) => {
    const errorMessages = document.querySelectorAll(".error-message");
    for (const el of errorMessages) {
        el.remove();
    }
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    console.log(`username: ${username}`);
    console.log(`email: ${email}`);

    if (validateForm()) {
        form.submit();
        console.log("Validaiton Successful");
    } else {
        console.error("Validation fails.");
    }
});

//  Where the heavy lifting for validation is done
const validateForm = () => {
    let isValid = true;
    const username = document.getElementById("username");

    if (username.value === "") {
        // console.error("Username must be filled out");
        showInputError(username, "Username is required");
        isValid = false;
    }

    const emailInput = email;
    const simpleEmailPattern = /.+@.+\..+/;
    // A more complex regex pattern for email validation
    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // // Validate the email using the simple email regex.
    // if (!simpleEmailPattern.test(emailInput)) {
    //     console.error("Please enter a valid email address.");
    //     showInputError(email, "Please enter a valid email address.");
    //     isValid = false;
    // }

    if (!complexEmailPattern.test(emailInput.value)) {
        // console.error("Please enter a complex email address.");
        showInputError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    return isValid;
};

// This function displays an error message next to the input.
const showInputError = (inputElement, message) => {
    // create a span element to display to message.
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
};
