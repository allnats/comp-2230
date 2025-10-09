function validateForm({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    ticketType,
    ticketNum,
}) {
    let isValid = true;

    // Remove all error messages first
    removeAllErrorMessages();

    if (firstName.value === "") {
        console.error("Please enter a first name.");
        addErrorMessage(firstName, "Please enter a first name.");
        isValid = false;
    }

    if (lastName.value === "") {
        console.error("Please enter a last name.");
        addErrorMessage(lastName, "Please enter a last Name");
        isValid = false;
    }

    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailAddress.value === "") {
        console.error("Please enter an email address.");
        addErrorMessage(emailAddress, "Please enter an email address.");
        isValid = false;
    } else if (!complexEmailPattern.test(emailAddress.value)) {
        console.error("Please enter a valid email address.");
        addErrorMessage(emailAddress, "Please enter a valid email address.");
        isValid = false;
    }

    const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
    if (phoneNumber.value === "") {
        console.error("Please enter a phone number.");
        addErrorMessage(phoneNumber, "Please enter a phone number.");
        isValid = false;
    } else if (!validatePhoneNumberRegex.test(phoneNumber.value)) {
        console.error("Please enter a valid phone number.");
        addErrorMessage(phoneNumber, "Please enter a valid phone number.");
        isValid = false;
    }

    if (ticketType.value === "") {
        console.error("Please enter a ticket type.");
        addErrorMessage(ticketType, "Please select a ticket Type.");
        isValid = false;
    }

    let number = Number(ticketNum.value);
    if (isNaN(number)) {
        addErrorMessage(ticketNum, "Please enter a number.");
        isValid = false;
    } else if (number < 1 || number > 10) {
        addErrorMessage(ticketNum, "Please enter a number between 1-10.");
        console.error("Please enter a number between 1-10.");
        isValid = false;
    }

    return isValid;
}

function addErrorMessage(inputElement, errorMessage) {
    const inputLabel = document.querySelector(`label[for=${inputElement.id}]`);
    const span = document.createElement("span");
    span.textContent = errorMessage;
    span.classList.add("error-message");
    inputLabel.appendChild(span);
}

function removeAllErrorMessages() {
    const spanErrorMessages = document.querySelectorAll(".error-message");
    for (const el of spanErrorMessages) {
        el.remove();
    }
}

const eventRegistrationForm = document.getElementById("eventRegistrationForm");
eventRegistrationForm.addEventListener("submit", (event) => {
    // Let's validate it first by pausing the default submit event.
    event.preventDefault();
    console.log("User submits the form.");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const emailAddress = document.getElementById("emailAddress");
    const phoneNumber = document.getElementById("phoneNumber");
    const ticketType = document.getElementById("ticketType");
    const ticketNum = document.getElementById("ticketNum");

    const formValues = {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        ticketType,
        ticketNum,
    };

    // Debugging purposes: Prints all the values of the input fields
    for (const key in formValues) {
        console.log(`${key}: ${formValues[key].value}`);
    }

    if (validateForm(formValues)) {
        eventRegistrationForm.submit();
        console.info("Validation success.");
    } else {
        console.error("Validation fails.");
    }
});
