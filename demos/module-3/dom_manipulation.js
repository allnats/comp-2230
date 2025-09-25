document.addEventListener("DOMContentLoaded", (event) => {
    const welcomeHeading = document.getElementById("welcome-heading");
    // Adding text between the element
    welcomeHeading.textContent = "Welcome, Adventurous User";

    // Rename the class name
    welcomeHeading.className = "highlight";
    welcomeHeading.className = "highlight-version-2";

    // Creating an element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This paragraph was dynamically added;";

    // Adding the newParagraph
    document.body.appendChild(newParagraph);
    newParagraph.style.color = "blue";
    newParagraph.style.fontWeight = "bold";

    const newButton = document.createElement("button");
    newButton.textContent = "Click Me!";
    newButton.addEventListener("click", (e) => {
        alert("You clicked the button!");
    });
    document.body.appendChild(newButton);

    const paragraphs = document.getElementsByTagName("p");
    for (let paragraph of paragraphs) {
        paragraph.classList.add("paragraph-style");
    }

    // Does not work
    // paragraphs.forEach((p) => {
    //     p.classList.add("paragraph-style");
    // });

    const nameInput = document.getElementById("name-input");
    nameInput.setAttribute("placeholder", "Type your name here.");

    const colourList = document.getElementById("color-list");
    for (let i = 1; i <= 10; i++) {
        let newListItem = document.createElement("li");
        newListItem.textContent = `List item #${i}`;
        colourList.insertBefore(newListItem, colourList.firstChild);
    }

    const greetButton = document.getElementById("greet-button");
    greetButton.addEventListener("click", (e) => {
        const nameInput = document.getElementById("name-input");
        const greetingDisplay = document.getElementById("greeting-display");
        greetingDisplay.textContent = `Hello there, ${nameInput.value}`;
        nameInput.value = "";
    });
});
