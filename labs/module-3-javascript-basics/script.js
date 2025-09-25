/*
    Planet details.
    Chosen Planet: Pluto.

    Defined three different variable keywords.
*/

const planetName = "Pluto";
let discoveryYear = "February 18, 1930";
var planetType = "Dwarf planet";

function populateHeader() {
    const header = document.getElementById("celestial-name");
    header.textContent = planetName;
}

document.addEventListener("DOMContentLoaded", () => {
    populateHeader();
});
