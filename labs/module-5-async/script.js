function displayCatFacts(facts) {}

function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("simulateAsyncOperation: 5s has elapsed!");
        }, 5000);
    });
}

async function demoAsyncCall() {
    console.log("Starting async simulation...");
    const result = await simulateAsyncOperation();
    console.log(result);
}

demoAsyncCall();

async function fetchCatBreeds() {
    const reqUrl = "https://catfact.ninja/breeds";
    try {
        const res = await fetch(reqUrl);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Error fetching Cat Breeds!");
    }
}

async function fetchCatFacts(num_of_facts) {
    try {
        const reqUrl = `https://catfact.ninja/facts?limit=${num_of_facts}`;
        const res = await fetch(reqUrl);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Error fetching Cat Facts.");
    }
}

function getFactCount() {
    const select = document.getElementById("factCount");
    return select.value;
}

fetchCatBreeds()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

fetchCatFacts(getFactCount())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

const displayBtn = document.getElementById("displayFactsBtn");

displayBtn.addEventListener("click", () => {
    fetchCatFacts(getFactCount())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
});
