/*
    Planet details.
    Chosen Planet: Pluto.

    Defined three different variable keywords.
*/

const planetName = "Pluto";
let discoveryYear = "February 18, 1930";
var planetType = "Dwarf planet";

const coolPlutoFact =
    "Pluto has a giant, heart-shaped glacier on its surface, a region of frozen nitrogen called Tombaugh Regio";

function populateHeader() {
    const header = document.getElementById("celestial-name");
    header.textContent = planetName;
}

document.addEventListener("DOMContentLoaded", () => {
    populateHeader();

    // Add event listener to "Reveal Space Fact" button
    const revealFactButton = document.getElementById("reveal-fact");
    const spaceFact = document.getElementById("space-fact");
    revealFactButton.addEventListener("click", () => {
        spaceFact.textContent = coolPlutoFact;
        spaceFact.style.display = "block";
    });
});
