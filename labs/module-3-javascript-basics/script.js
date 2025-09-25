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

/*
    Calculate Pluto weight equivalent from Earth weight
    Pluto's gravity is about 0.063 times Earth's gravity
*/
const calculatePlutoWeight = (earthWeight) => {
    return `${earthWeight}kg in Earth is ${earthWeight * 0.063}kg in Pluto`;
};

function populateHeader() {
    const header = document.getElementById("celestial-name");
    header.textContent = planetName;
}

function addCelestialInfo() {
    const planetDesc =
        "Pluto is the largest known dwarf planet located in the distant Kuiper Belt, a ring of icy bodies beyond Neptune. Discovered in 1930 by Clyde Tombaugh, it is a surprisingly complex world of ice and rock with vast plains of frozen nitrogen (including the famous heart-shaped Tombaugh Regio), water-ice mountains, and a large moon, Charon, with which it forms a unique binary system. Its reclassification from a planet to a dwarf planet in 2006 sparked a global debate, and it was famously explored up close by NASA's New Horizons spacecraft in 2015.";

    const celestialInfoSection = document.getElementById("celestial-info");
    const pElement = document.createElement("p");
    pElement.textContent = planetDesc;
    celestialInfoSection.appendChild(pElement);
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

    addCelestialInfo();

    console.log(calculatePlutoWeight(32));

    try {
        invalidFunction("This should throw an err");
    } catch (e) {
        console.log(`I caught an error: ${e.name} ${e.message}`);
    }

    try {
        console.log(
            `I'm trying to print a non-defined variable: ${thisDoesNotExist}`
        );
    } catch (e) {
        console.log(`I caught an error: ${e.name} ${e.message}`);
    }
});
